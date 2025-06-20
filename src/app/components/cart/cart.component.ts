import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { cartItem } from '../../models/cartItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnChanges {
  @Input() items: cartItem[] = [];

  @Output() removeEventEmitter: EventEmitter<number> =
    new EventEmitter<number>();
  onRemoveItem(id: number) {
    this.removeEventEmitter.emit(id);
  }

  @Input() totalPrice: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.getTotalPrice();
    if (!changes['items'].firstChange) {
      this.saveSession();
    }
  }

  onQuantityChange(item: cartItem): void {
    if (!item.quantity || item.quantity < 1) {
      item.quantity = 1;
    }
    this.items = this.items.map((item) => {
      if (item.id === item.id) {
        return {
          ...item,
          quantity: item.quantity,
        };
      }
      return item;
    });
    this.saveSession();
  }

  getTotalPrice(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
