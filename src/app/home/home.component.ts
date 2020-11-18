import {
  Component
} from '@angular/core';
import {SigningService} from "../service/signing.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reg: boolean
  constructor(public loginService: SigningService) {
    console.log(this.loginService.emailL)
    console.log(this.loginService.passwordL)
    this.reg = loginService.isUserLoggedIn
  }
}
