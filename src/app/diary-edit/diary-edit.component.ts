import {
  Component, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.component.html',
  styleUrls: ['./diary-edit.component.css']
})
export class DiaryEditComponent {
  openEntry = []
  childData = []

  eventHandler(event: string[]) {
    this.childData = event;
  }
}
