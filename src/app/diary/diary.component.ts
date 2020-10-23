import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnDestroy,
  OnInit
} from '@angular/core';
import {SigningService} from "../service/signing.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent{
  owner: string
  isUndefined(val): boolean { return typeof val === 'undefined'; }
   constructor(public loginService: SigningService) {
    this.owner = this.loginService.firstN
  }
}
