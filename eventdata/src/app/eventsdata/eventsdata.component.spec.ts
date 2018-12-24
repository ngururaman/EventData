import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsdataComponent } from './eventsdata.component';

describe('EventsdataComponent', () => {
  let component: EventsdataComponent;
  let fixture: ComponentFixture<EventsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
