import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck,
  EventEmitter,
  Input, OnDestroy, OnInit,
  Output
} from '@angular/core';
import {Notes} from './notes'

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
    OnDestroy {
  @Input() item = []
  @Output() dataPass = new EventEmitter<any>();
  entryID: number = 0
  entryTitle: string;
  entryDate: number;
  entryContents: string;
  toDate: number = Date.now()
  entryList: Array<Notes> = [];

  saveButtonClick() {
    let entryObj = new Notes();
    entryObj.entryID = this.entryID
    entryObj.entryTitle = this.entryTitle
    entryObj.entryDate = this.toDate
    entryObj.entryContents = this.entryContents
    this.entryList.push(entryObj);
    this.dataPass.emit(this.entryList)
    this.entryID++
  }

  constructor() {
    console.log("FormComponent:Constructor");
  }

  ngOnChanges() {
    console.log("FormComponent:OnChanges");
  }

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
