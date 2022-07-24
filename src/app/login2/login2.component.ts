import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  data = {
    email: 'user@example.com',
    password: '123123',
    isRememberMe: true
  };

  orig_body_className = document.body.className;
  //reactive form 可以細節去設定介面顯示功能
  form = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.email, Validators.required],
      updateOn: 'blur',
    }),
    password: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(32)]
    }),
    isRememberMe: this.fb.control(true,{
    })
  });

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    setTimeout(() => {
      //setValue格式要完全符合
      //this.form.setValue(this.data);
      this.form.patchValue(this.data);
    }, 2000);
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  resetForm(): void {
    this.form.reset(this.data);
  }

  // doLogin(form: NgForm) {
  //   if (form.valid) {
  //     localStorage.setItem('apikey', 'TEST');
  //     var url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  //     this.router.navigateByUrl(url);
  //     this.router.navigate(['/'], {
  //       state: {},
  //     });
  //   }
  // }

  // isInvalid(control: NgModel, form: NgForm) {
  //   return control.invalid && (control.touched || form.submitted);
  // }

  // isValid(control: NgModel) {
  //   return control.valid;
  // }

  // disableField(control: NgModel) {
  //   if (control.disabled) {
  //     control.control.enable();
  //   } else {
  //     control.control.disable();
  //   }
  // }
}
