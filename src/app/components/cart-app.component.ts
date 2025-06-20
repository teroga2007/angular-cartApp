import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CartComponent } from './cart/cart.component';
import { cartItem } from '../models/cartItem';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'cart-app',
  imports: [CommonModule, CatalogueComponent, CartComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
  private toastr = inject(ToastrService);

  products: Product[] = [];

  items: cartItem[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.products = this.service.getData();
    sessionStorage.getItem('cart') &&
      (this.items = JSON.parse(sessionStorage.getItem('cart') || '') || []);
  }

  onAddToCart(product: Product): void {
    const hasItem = this.items.find((item) => item.product.id === product.id);

    if (hasItem) {
      this.items = this.items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    } else {
      this.items = [
        ...this.items,
        {
          product: { ...product },
          quantity: 1,
          id: product.id,
        },
      ];
    }
    this.toastr.success('Product added successfully');
  }

  onRemoveItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
    this.toastr.success('Product removed successfully');
    if (this.items.length === 0) {
      sessionStorage.removeItem('cart');
    }
  }
}
