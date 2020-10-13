import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.component.html',
  styleUrls: ['./diary-edit.component.css']
})
export class DiaryEditComponent
  implements OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  openEntry = []
  childData = []

  eventHandler(event: string[]) {
    this.childData = event;
  }

  constructor() {
    console.log("DiaryEditComponent:Constructor");
  }

  ngOnChanges() {
    console.log("DiaryEditComponent:OnChanges");
  }

  ngOnInit() {
    console.log("DiaryEditComponent:OnInit");
  }

  ngDoCheck() {
    console.log("DiaryEditComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("DiaryEditComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("DiaryEditComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("DiaryEditComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("DiaryEditComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("DiaryEditComponent:OnDestroy");
  }
}
