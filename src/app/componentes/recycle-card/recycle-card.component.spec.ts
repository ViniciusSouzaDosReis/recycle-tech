import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecycleCardComponent } from './recycle-card.component';

describe('RecycleCardComponent', () => {
  let component: RecycleCardComponent;
  let fixture: ComponentFixture<RecycleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecycleCardComponent]
    });
    fixture = TestBed.createComponent(RecycleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
