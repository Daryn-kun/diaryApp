import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";
import {Users} from "../users";

@Injectable({
  providedIn: 'root'
})
export class SigningService {
  public globalID: number;
  public reg = false;
  // @ts-ignore
  registeredUsers = [

  ];

  constructor(private loggingService: LoggingService) { }
  get isUserLoggedIn(): boolean{
    return this.reg;
  }
  set isUserLoggedIn(val){
    this.reg = val;
  }
  // Register getter and setter
  get globalSavedId():number{
    this.loggingService.log('The registered id: ' + this.globalID);
    return this.globalID;
  }
  set globalSavedId(val: number){
    this.globalID = val;
  }

  get usersList(): string[]{
    this.loggingService.log('List of users' + this.registeredUsers);
    // @ts-ignore
    return this.registeredUsers;
  }
  set usersList(val: string[]){
    // @ts-ignore
    this.registeredUsers = val;
  }
  getUser(email: string) {
    return this.registeredUsers.find(x => x.email === email);
  }
  getUserByID(id: number) {
    return this.registeredUsers.find(x => x.userID === id);
  }
  removeUser(deleteId: number): void
  {
    for (let users of this.registeredUsers) {
      if (users.userID == deleteId) {
        this.registeredUsers.splice(this.registeredUsers.indexOf(users), 1);
        break;
      }
    }
    console.log(this.registeredUsers);
  };
}
