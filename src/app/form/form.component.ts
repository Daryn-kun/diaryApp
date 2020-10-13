import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {Notes} from './notes'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
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


}
