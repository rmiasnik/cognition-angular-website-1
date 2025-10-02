import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../account/account.service';

@Component({
    selector: 'app-checkout-address',
    templateUrl: './checkout-address.component.html',
    styleUrls: ['./checkout-address.component.scss'],
    standalone: false
})
export class CheckoutAddressComponent {
  @Input() checkoutForm!: UntypedFormGroup;
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  saveUserAddress() {
    this.accountService
      .updateUserAddress(this.checkoutForm.get('addressForm')!.value)
      .subscribe(
        (address) => {
          this.checkoutForm.get('addressForm')?.reset(address);
          this.toastr.success('Address saved');
        },
        (error) => {
          console.log(error);
          this.toastr.error(error.message);
        }
      );
  }
}
