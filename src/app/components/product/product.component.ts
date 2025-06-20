import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() addToCartEventEmitter = new EventEmitter<Product>();
  onAddToCart(product: Product) {
    this.addToCartEventEmitter.emit(product);
  }
}
