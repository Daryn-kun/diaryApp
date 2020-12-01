import { Component, OnInit } from '@angular/core';
import {SigningService} from "../service/signing.service";
import {EntryService} from "../service/entry.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  User: any = [];

  constructor(private loginService: SigningService, private activateRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.loginService.getUsers()
      .subscribe(data => this.User = data);
  }
  deleteUser(id) {
    if (window.confirm("Are your sure you want to delete?")){
      this.loginService.deleteUser(id)
        .subscribe(data => this.loadUsers())
    }
  }
}
