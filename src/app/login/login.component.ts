import {
  Component
} from '@angular/core';
import {SigningService} from "../service/signing.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = ""
  password = ""
  constructor(public loginService: SigningService) {

  }
  saveData(){
    this.loginService.emailL = this.email
    this.loginService.passwordL = this.password
    this.loginService.isUserLoggedIn = true
  }

}
