import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output
} from '@angular/core';
import {EntryService} from "../service/entry.service";

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.component.html',
  styleUrls: ['./diary-edit.component.css']
})
export class DiaryEditComponent
  implements OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  openEntry = []
  entryOutput = []

  constructor(public entryService: EntryService) {
    console.log("Diary List" + this.entryService.entryList)
    console.log("DiaryEditComponent:Constructor");
  }
  getEntry(){
    this.entryOutput = this.entryService.entryList
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
