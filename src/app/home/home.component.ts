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
  reg: boolean = true
  constructor(public loginService: SigningService) {
    console.log(this.loginService.emailL)
    console.log(this.loginService.passwordL)
    if (typeof loginService.emailR === 'undefined' && typeof loginService.emailL === 'undefined'){
      this.reg = false
    } else {
      this.reg = true
    }
  }
}
