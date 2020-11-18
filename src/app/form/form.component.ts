import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  EventEmitter,
  Input, OnDestroy, OnInit,
  Output
} from '@angular/core';
import {EntryService} from "../service/entry.service";
import {Entry} from "../entry";
import {CanComponentLeave} from "../guards/unsaved-changes-guard.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent
  implements OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy{
  @Input() item = []
  entryID: number = 0
  entryTitle: string;
  entryDate: number;
  entryContents: string;
  toDate: number = Date.now()
  entryList1: Array<Entry> = [];
  entryPass: any;
  unSaved: boolean = true;


  saveButtonClick() {
    // @ts-ignore
    let entryObj = new Entry()
    entryObj.entryID = this.entryID
    entryObj.entryTitle = this.entryTitle
    entryObj.entryDate = this.toDate
    entryObj.entryContents = this.entryContents
    this.entryList1.push(entryObj)
    this.entryPass = this.entryList1
    this.entryService.entryList = this.entryPass;
    this.entryID++
    this.unSaved = false;
  }
  constructor(public entryService: EntryService) {
    console.log("FormComponent:Constructor");
  }

  ngOnChanges() {
    console.log("FormComponent:OnChanges");
  }
  dataFromService:any;
  ngOnInit() {
    console.log("FormComponent:OnInit");
  }

  ngDoCheck() {
    console.log("FormComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("FormComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("FormComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("FormComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("FormComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("FormComponent:OnDestroy");
  }
}
