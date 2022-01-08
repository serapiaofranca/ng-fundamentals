import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #E05C65; paddign-left: 10px;}
  `]
})

export class LoginComonent {
  userName
  password
  mouseoverLogin
  constructor ( private authService: AuthService, private router: Router) {

  }

  login(formValues) {
    this.authService.loginUser ( formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
