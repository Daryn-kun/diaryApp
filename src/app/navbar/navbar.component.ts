import {
  Component, OnInit
} from '@angular/core';
import {SigningService} from "../service/signing.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  reg$: boolean
  returnUrl : string;
  constructor(public loginService: SigningService,  private router : Router, private route: ActivatedRoute) {
    console.log("status: " + this.reg$)
  }

  ngOnInit(){
    this.reg$ = this.loginService.isUserLoggedIn
    console.log("status: " + this.reg$)
    this.returnUrl = this.route.snapshot.queryParams['home'] || 'login';
  }

  logOut() {
    this.loginService.isUserLoggedIn = false
    this.router.navigateByUrl(this.returnUrl);
  }

  onClick() {
    this.router.navigate(['/home', this.loginService.globalSavedId])
    console.log("Passed ID: " + this.loginService.globalSavedId)
  }
}
