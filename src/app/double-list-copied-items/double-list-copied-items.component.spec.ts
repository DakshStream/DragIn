import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleListCopiedItemsComponent } from './double-list-copied-items.component';

describe('DoubleListCopiedItemsComponent', () => {
  let component: DoubleListCopiedItemsComponent;
  let fixture: ComponentFixture<DoubleListCopiedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleListCopiedItemsComponent]
    });
    fixture = TestBed.createComponent(DoubleListCopiedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
