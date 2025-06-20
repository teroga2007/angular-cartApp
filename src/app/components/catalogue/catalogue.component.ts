import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'catalogue',
  imports: [CommonModule, ProductComponent],
  templateUrl: './catalogue.component.html',
})
export class CatalogueComponent {
  @Input() products: Product[] = [];

  @Output() addToCartEventEmitter = new EventEmitter<Product>();
  onAddToCart($event: Product) {
    this.addToCartEventEmitter.emit($event);
  }
}
