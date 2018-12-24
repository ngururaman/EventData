import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsdataComponent } from './eventsdata/eventsdata.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

const routes: Routes = [
  {
    path : 'events/eventsData/:dateRange',
    component : EventsdataComponent
  },
  {
    path : 'events/eventDetails/:id',
    component : EventdetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
