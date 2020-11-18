import {Component, OnInit} from '@angular/core';
import {SigningService} from "../service/signing.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname = ""
  lastname = ""
  email = ""
  password = ""
  passwordCon = ""

  constructor(private registerService: SigningService) {
  }
  saveData(){
    if(this.password == this.passwordCon) {
      this.registerService.firstN = this.firstname
      this.registerService.firstN = this.firstname
      this.registerService.emailP = this.email
      this.registerService.passwordP = this.password
      this.registerService.isUserLoggedIn = true
    }
    else{
      console.log("Password doesn't match")
    }
  }
}
