import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.scss']
})

export class EventdetailsComponent implements OnInit {

  eventDetails$: Object;
  
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.eventDetails$ = params.id);
  }

  ngOnInit() {
    this.data.getEventDetails(this.eventDetails$).subscribe(
      data => this.eventDetails$ = data
    );
  }

}
