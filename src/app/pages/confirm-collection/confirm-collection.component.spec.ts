import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCollectionComponent } from './confirm-collection.component';

describe('ConfirmCollectionComponent', () => {
  let component: ConfirmCollectionComponent;
  let fixture: ComponentFixture<ConfirmCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmCollectionComponent]
    });
    fixture = TestBed.createComponent(ConfirmCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
