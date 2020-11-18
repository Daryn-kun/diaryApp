import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {EntryService} from "../service/entry.service";

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardService implements Resolve<any>{

  constructor(private enrtyService: EntryService) { }
  resolve(){
    return this.enrtyService.entryList;
  }
}
