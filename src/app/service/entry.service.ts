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
  getEntry(id: number) {
    return this.entryListService.find(x => x.entryID === id);
  }
  removeEntry(deleteId: number): void
  {
    for (let entries of this.entryListService) {
      if (entries.entryID == deleteId) {
        this.entryListService.splice(this.entryListService.indexOf(entries), 1);
        break;
      }
    }
    console.log(this.entryListService);
  };
}
