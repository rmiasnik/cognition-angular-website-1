import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/cart.service';

@Component({
    selector: 'app-order-totals',
    templateUrl: './order-totals.component.html',
    styleUrls: ['./order-totals.component.scss'],
    standalone: false
})
export class OrderTotalsComponent {
  public cartTotals$ = this.cartService.cartTotal$;
  constructor(private cartService: CartService) {}
}
