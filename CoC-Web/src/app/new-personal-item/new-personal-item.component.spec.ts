import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonalItemComponent } from './new-personal-item.component';

describe('NewPersonalItemComponent', () => {
  let component: NewPersonalItemComponent;
  let fixture: ComponentFixture<NewPersonalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPersonalItemComponent]
    });
    fixture = TestBed.createComponent(NewPersonalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
