import {
  Component, OnInit
} from '@angular/core';
import {SigningService} from "../service/signing.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  reg: boolean
  id = this.route.snapshot.params['id'];
  user: any = {};
  owner: string
  constructor(public loginService: SigningService, private route: ActivatedRoute) {

  }

  ngOnInit(){
    this.reg = this.loginService.isUserLoggedIn
    if (this.reg) {
      this.loginService.getUserByID(this.id.toString())
        .subscribe(data => this.user = data);
      this.owner = this.user.firstName;
      console.log("User" + this.user)
    }
  }
}
