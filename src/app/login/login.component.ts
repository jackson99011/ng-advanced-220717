import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  orig_body_class = document.body.className;
  data: any = {
    email: '',
    password: '123',
    isRememberMe: true
  }
  form!: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    document.body.className = this.orig_body_class;
  }

  doLogin(form: NgForm): void {
    if (form.valid) {
      console.log('login');
      localStorage.setItem('apikey', 'TEST');
      var url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(url);
    }
  }
  //isInValid 和 isValid 要正向表示，不能反向表示，因有多個狀態非單純true false。
  isInvalid(control: NgModel, form: NgForm) {
      return control.invalid && (control.touched || form.submitted);
  }

  isValid(control: NgModel) {
      return control.valid && control.touched;
  }

}
