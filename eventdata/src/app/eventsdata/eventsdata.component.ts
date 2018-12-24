import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventsdata',
  templateUrl: './eventsdata.component.html',
  styleUrls: ['./eventsdata.component.scss']
})
export class EventsdataComponent implements OnInit, OnDestroy {

  eventsData$: Object;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.eventsData$ = params.dateRange);
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      processing: true
    };

    this.data.getEventsData(this.eventsData$).subscribe(
      data => {
      this.eventsData$ = data;
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}