import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,private datePipe: DatePipe) { }

  getEventsData(dateRange) {
	let splittedDate = dateRange.split("_", 2); 
  	let newDate = new Date(splittedDate[0]);
  	return this.http.get('/events/eventsData/' +this.datePipe.transform(newDate, 'yyyy-MM-dd')+'/'+this.datePipe.transform(this.addDays(newDate,splittedDate[1]),'yyyy-MM-dd'));
  }

  getEventDetails(enentId) {
    return this.http.get('/events/eventDetails/' + enentId);
  }
  
  addDays(date: Date, days: string): Date {    
    if(days=='Week'){
    	date.setDate(date.getDate() + 7);
    }else if(days=='Month'){
    	date.setDate(date.getDate() + 30);
    }else{
    	date.setDate(date.getDate() + 90);
    }
    return date;
  }
}
