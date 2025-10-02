import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { IDeliveryMethod } from '../../shared/models/deliveryMethod';
import { CheckoutService } from '../checkout.service';

@Component({
    selector: 'app-checkout-delivery',
    templateUrl: './checkout-delivery.component.html',
    styleUrls: ['./checkout-delivery.component.scss'],
    standalone: false
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm!: UntypedFormGroup;
  public deliveryMethods: IDeliveryMethod[] = [];
  constructor(
    private checkoutService: CheckoutService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.checkoutService.getAvailableDelivery().subscribe((dms) => {
      this.deliveryMethods = dms;
    });
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.cartService.setShippingPrice(deliveryMethod);
  }
}
