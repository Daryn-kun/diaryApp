import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {SigningService} from "../service/signing.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{

  constructor(private loginService: SigningService,
              private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("we are in canActivate method");

    if (!this.loginService.isUserLoggedIn){
      this.router.navigate(['login'])
      return false;
    }
    return true;
  }
}
