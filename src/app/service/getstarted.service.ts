import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class GetstartedService {
  title: String
  info: String
  constructor(private loggingService: LoggingService) { }
  getTitle(){
    this.title = 'What are you writing for?'
    this.loggingService.log('The title of GetStarted: ' + this.title);
    return this.title
  }
  getInfo(){
    this.info = 'Whether you’re looking for a tool to record your daily emotions and activities in a reflective journal, keep track\n' +
      '    of milestones in a food diary or even record your dreams in a dream journal, Diary has you covered'
    this.loggingService.log('The info of GetStarted: ' + this.info);
    return this.info
  }
}
