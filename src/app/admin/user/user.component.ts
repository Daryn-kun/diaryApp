import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SigningService} from "../../service/signing.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  @Input() userDetailsNew = {
    firstName: "", lastName: "", email: "", password: ""
  }
  User: any = [];
  id = this.actRoute.snapshot.params['id']
  userDetails: any = {}
  public regEmail = true;
  constructor(private registerService: SigningService, private actRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    if (this.id !== undefined){
      this.registerService.getUserByID(this.id.toString())
        .subscribe(data => this.userDetails = data);
    }
    else {
      this.registerService.getUsers()
        .subscribe(data => this.User = data);
    }

  }
  onSubmit() {
    if (this.id !== undefined){
      if (window.confirm('Are you sure you want to update?')){
        this.registerService.updateUser(this.id, this.userDetails)
          .subscribe(data => {
            this.router.navigate(['/admin'])
          })
      }
    } else {
      if (this.checkEmail(this.userDetailsNew.email)){
        this.registerService.registerUser(this.userDetailsNew)
          .subscribe((data: {}) => {
            this.router.navigate(['/admin'])
          })
      } else {
        this.regEmail = false
      }

    }
  }
  checkEmail(email): boolean {
    if (this.User.find(x => x.email === email)) {
      return false
    } else {
      return true
    }
  }
}
