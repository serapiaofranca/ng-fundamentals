import { Injectable } from "@angular/core"
import { first } from "rxjs/operators";
import { IUser } from "./user.model"

@Injectable()
export class AuthService {
  public currentUser: IUser
  loginUser (userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Roger',
      lastName: 'Silva'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser( firstName: string, lastName: string){
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }

}
