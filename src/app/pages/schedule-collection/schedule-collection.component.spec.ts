import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCollectionComponent } from './schedule-collection.component';

describe('ScheduleCollectionComponent', () => {
  let component: ScheduleCollectionComponent;
  let fixture: ComponentFixture<ScheduleCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCollectionComponent]
    });
    fixture = TestBed.createComponent(ScheduleCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
