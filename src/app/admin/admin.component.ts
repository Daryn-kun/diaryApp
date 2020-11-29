import { Component, OnInit } from '@angular/core';
import {SigningService} from "../service/signing.service";
import {EntryService} from "../service/entry.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  entryOutput = []

  constructor(private loginService: SigningService, private activateRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit(){
    this.entryOutput = this.loginService.usersList;
  }
}
