import { Injectable } from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  entryListService = [];
  constructor(private loggingService: LoggingService) { }
  // @ts-ignore
  get entryList(): string[]{
    this.loggingService.log('List of Entries' + this.entryListService);
    return this.entryListService;
  }
  set entryList(val: string[]){
    this.entryListService = val;
  }
}
