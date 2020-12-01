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
export class LoginComponent implements OnInit{
  User: any = [];
  email = ""
  password = ""
  logEmail = true;
  logPass = true;
  user: any;

  constructor(public loginService: SigningService, private router : Router, private route: ActivatedRoute) {

  }
  onSubmit(value: any) {
    if (this.User.find(x => x.email === this.email)){
      this.user = this.User.find(x => x.email === this.email)
      if (this.user.password == this.password){
        console.log(value)
        this.loginService.isUserLoggedIn = true
        this.router.navigate(['/home', this.user.id])
        this.loginService.globalSavedId = this.user.id
        console.log("Passed id: "+this.loginService.globalSavedId)
      } else {
        this.logPass=false
      }
    } else{
      this.logEmail=false
    }
  }
  ngOnInit(): void {
    this.loginService.getUsers()
      .subscribe(data => this.User = data);
  }
}
