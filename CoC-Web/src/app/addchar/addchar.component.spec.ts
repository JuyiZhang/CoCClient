import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcharComponent } from './addchar.component';

describe('AddcharComponent', () => {
  let component: AddcharComponent;
  let fixture: ComponentFixture<AddcharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcharComponent]
    });
    fixture = TestBed.createComponent(AddcharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
