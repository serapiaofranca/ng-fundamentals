import { Component} from '@angular/core'

@Component({
  templateUrl: './login.component.html'
})

export class LoginComonent {
  userName
  password

  login(formValues) {
    console.log(formValues)
  }
}
