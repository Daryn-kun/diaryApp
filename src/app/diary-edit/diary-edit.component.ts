import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output
} from '@angular/core';
import {EntryService} from "../service/entry.service";
import {CanComponentLeave} from "../guards/unsaved-changes-guard.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.component.html',
  styleUrls: ['./diary-edit.component.css']
})
export class DiaryEditComponent
  implements OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, CanComponentLeave {
  openEntry: any
  entryOutput = []

  constructor(public entryService: EntryService, private route: ActivatedRoute) {
    console.log("Diary List" + this.entryService.entryList)
    console.log("DiaryEditComponent:Constructor");
  }
  getEntry(){
    this.entryOutput = this.entryService.entryList
  }
  unSaved: boolean = true;
  canLeave(): boolean{
    if (this.unSaved){
      return window.confirm('There are unsaved changes! Are you sure?');
    }
    return true;
  }
  ngOnChanges() {
    console.log("DiaryEditComponent:OnChanges");
  }

  ngOnInit() {
    // @ts-ignore
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.openEntry = this.entryService.getEntry(id)
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

  showEntry(id: number) {
    this.openEntry = this.entryService.getEntry(id)
    console.log(this.openEntry)
  }
}
