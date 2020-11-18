import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class SigningService {
  public emailLogin:string;
  public passwordLogin:string;
  public firstName: string;
  public lastName: string;
  public emailR: string;
  public passwordR: string;
  public reg = false;

  constructor(private loggingService: LoggingService) { }
  get isUserLoggedIn(): boolean{
    return this.reg;
  }
  set isUserLoggedIn(val){
    this.reg = val;
  }
  // Login getter and setter
  get emailL():string{
    this.loggingService.log('The logined Email: ' + this.emailLogin);
    return this.emailLogin;
  }
  set emailL(val: string){
    this.emailLogin = val;
  }
  get passwordL():string{
    return this.passwordLogin;
  }
  set passwordL(val:string){
    this.passwordLogin=val;
  }
  // Register getter and setter
  get firstN():string{
    this.loggingService.log('The registered First Name: ' + this.firstName);
    return this.firstName;
  }
  set firstN(val: string){
    this.firstName = val;
  }
  get lastN():string{
    this.loggingService.log('The registered Last Name: ' + this.lastName);
    return this.lastName;
  }
  set lastN(val: string){
    this.lastName = val;
  }
  get emailP():string{
    this.loggingService.log('The registered Email: ' + this.emailR);
    return this.emailR;
  }
  set emailP(val: string){
    this.emailR = val;
  }
  get passwordP():string{
    return this.passwordR;
  }
  set passwordP(val:string){
    this.passwordR=val;
  }
}
