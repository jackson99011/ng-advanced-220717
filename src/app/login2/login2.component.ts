import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
function forbiddenPassword(control: AbstractControl)
{
  if (!control.value) return null;

  let words = ['will', 'duotify', '123'];

  var result =  words.some(x => x.indexOf(control.value) >= 0)


   if (result)
     return {forbiddenPassword: true};
   else
    return null;
}
@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  data = {
    email: 'user@example.com',
    password: '123123',
    isRememberMe: true,
    profiles: [
      {
        city: 'Taipei',
        tel: '0988-888888',
      },
      {
        city: '台中',
        tel: '0944-444444',
      },
      {
        city: 'Kaoshuang',
        tel: '0911111111',
      },
    ],
  };

  orig_body_className = document.body.className;
  //reactive form 可以細節去設定介面顯示功能
  form = this.fb.group({
    email: this.fb.control('', {
      validators: [Validators.email, Validators.required],
      updateOn: 'blur',
    }),
    password: this.fb.control('', {
      validators: [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        forbiddenPassword]
    }),
    isRememberMe: this.fb.control(true,{
    }),
    profiles: this.fb.array([
      this.makeProfile('Taipei', '0988-888888'),
      this.makeProfile('台中', '0933-333333'),
    ]),
    }
    ,{
      validators: []
    }
  );

  makeProfile(city: string, tel:string) {
      return this.fb.group({
        city: this.fb.control(city, {validators: [Validators.required]}),
        tel: this.fb.control(tel, {validators: [Validators.required]})
      })
  }

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';

    setTimeout(() => {
      //setValue格式要完全符合
      //this.form.setValue(this.data);
      //this.form.patchValue(this.data);
      this.form.controls.profiles.clear();
      //有遺漏的補上
      this.data.profiles.forEach(profile => {
        this.form.controls.profiles.push(this.makeProfile(profile.city, profile.tel));
      });
      this.form.setValue(this.data);
    }, 2000);
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_className;
  }

  fc(name: string) {
    return this.form.get(name) as FormControl;
  }

  fg(name: string) {
    return this.form.get(name) as FormGroup;
  }

  fa(name: string) {
    return this.form.get(name) as FormArray;
  }

  resetForm(): void {
    this.form.reset(this.data);
  }

  addProfile() {
    this.form.controls.profiles.push(this.makeProfile('', ''));
  }

  doLogin(form: FormGroupDirective) {
    if (form.valid) {
      localStorage.setItem('apikey', 'TEST');
      var url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(url);
      this.router.navigate(['/'], {
        state: {},
      });
    }
  }

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
