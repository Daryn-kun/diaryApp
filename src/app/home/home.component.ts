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
  user: any
  constructor(public loginService: SigningService, private route: ActivatedRoute) {
    this.reg = loginService.isUserLoggedIn
  }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.user = this.loginService.getUserByID(id)
  }
}
