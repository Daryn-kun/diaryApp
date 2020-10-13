import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname = ""
  lastname = ""
  email = ""
  password = ""
  passwordCon = ""

  constructor() {
  }

  ngOnInit(): void {
  }

}
