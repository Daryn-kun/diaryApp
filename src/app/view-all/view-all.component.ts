import {Component, Input, OnInit} from '@angular/core';
import {EntryService} from "../service/entry.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  entryOutput = []
  constructor(private entryService: EntryService, private activateRoute: ActivatedRoute) {
  }
  ngOnInit(){
    this.entryOutput = this.activateRoute.snapshot.data['data'];
  }

}
