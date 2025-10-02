import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {
  public returnUrl = '/shop';
  public loginForm: UntypedFormGroup;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.accountService.login(this.loginForm.value).subscribe((res) => {
      this.router.navigateByUrl(this.returnUrl);
    }, console.log);
  }

  ngOnInit() {
    this.returnUrl = this.activeRoute.snapshot.queryParams.returnUrl;
  }
}
