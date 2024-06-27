import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
})
export class CartModalComponent {

  @Input() items: CartItem[] = [];
  @Input() total = 0;

  @Output() idProductEventEmitter = new EventEmitter();
  @Output() openEventEmitter = new EventEmitter();

  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }

  openCart(): void {
    this.openEventEmitter.emit()
  }
}
