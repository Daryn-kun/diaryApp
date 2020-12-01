import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";
import {Users} from "../users";
import {User} from "../user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SigningService {
  public globalID: number;
  public reg = false;
  apiUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private loggingService: LoggingService, public _http: HttpClient) { }
  getUsers(): Observable<User>{
    return this._http.get<User>(this.apiUrl + '/users');
  }
  deleteUser(id){
    return this._http.delete<User>(this.apiUrl + '/users/' + id);
  }
  registerUser(user){
    return this._http.post<User>(this.apiUrl + '/users', JSON.stringify(user), this.httpOptions);
  }
  updateUser(id, user): Observable<User>{
    return this._http.put<User>(this.apiUrl + '/users/' + id,
      JSON.stringify(user), this.httpOptions);
  }
  getUserByID(id): Observable<User> {
    return this._http.get<User>(this.apiUrl + '/users/' + id);
  }
  // user logged in
  get isUserLoggedIn(): boolean{
    return this.reg;
  }
  set isUserLoggedIn(val){
    this.reg = val;
  }
  // save registered user id
  get globalSavedId():number{
    this.loggingService.log('The registered id: ' + this.globalID);
    return this.globalID;
  }
  set globalSavedId(val: number){
    this.globalID = val;
  }

}
