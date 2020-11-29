import {Component, OnInit} from '@angular/core';
import {SigningService} from "../service/signing.service";
import {Users} from "../users";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userID: number = 0
  firstname = ""
  lastname = ""
  email = ""
  password = ""
  passwordCon = ""
  userList: Array<Users> = [];
  userPass: any;

  constructor(private registerService: SigningService, private router : Router) {
  }
  saveData(){

  }

  onSubmit(value: any) {
    console.log(value)
    if(this.password == this.passwordCon) {
      this.registerService.isUserLoggedIn = true
      // @ts-ignore
      let userObj = new Users()
      userObj.userID = this.userID
      userObj.email = this.email
      userObj.password = this.password
      userObj.firstName = this.firstname
      userObj.lastName = this.lastname
      this.userList.push(userObj)
      this.userPass = this.userList
      this.registerService.usersList = this.userPass;
      this.router.navigate(['/home', this.userID])
      this.registerService.globalSavedId = this.userID
      console.log("Passed id: "+this.registerService.globalSavedId)
      this.userID++

    }
    else{
      console.log("Password doesn't match")
    }
  }
}
