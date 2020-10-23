import {
  Component
} from '@angular/core';
import {GetstartedService} from "../service/getstarted.service";

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent {
  title: String
  info: String
  constructor(private getStartedService: GetstartedService) {
    this.title = this.getStartedService.getTitle()
    this.info = this.getStartedService.getInfo()
  }
}
