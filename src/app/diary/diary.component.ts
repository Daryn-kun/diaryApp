import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input, OnDestroy,
  OnInit
} from '@angular/core';
import {SigningService} from "../service/signing.service";

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit{
  @Input() ownerFromParent: string
  constructor(private loginService: SigningService) {
  }
  ngOnInit(): void {
  }

}
