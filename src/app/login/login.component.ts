import {
  Component, OnInit
} from '@angular/core';
import {SigningService} from "../service/signing.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email = ""
  password = ""
  logEmail = true;
  logPass = true;
  user: any;

  constructor(public loginService: SigningService, private router : Router, private route: ActivatedRoute) {

  }
  onSubmit(value: any) {
    this.user = this.loginService.getUser(this.email)
    if (this.user !== undefined){
      if (this.user.password == this.password){
        console.log(value)
        this.loginService.isUserLoggedIn = true
        this.router.navigate(['/home', this.user.userID])
        this.loginService.globalSavedId = this.user.userID
        console.log("Passed id: "+this.loginService.globalSavedId)
      } else {
        this.logPass=false
      }
    } else{
      this.logEmail=false
    }
  }
}
