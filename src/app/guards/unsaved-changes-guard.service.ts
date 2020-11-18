import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {FormComponent} from "../form/form.component";

export interface CanComponentLeave{
  canLeave: () => boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuardService implements CanDeactivate<CanComponentLeave>{

  canDeactivate(component: CanComponentLeave){
    if (component.canLeave) {
      return component.canLeave();
    }
    return true;
  }
}
