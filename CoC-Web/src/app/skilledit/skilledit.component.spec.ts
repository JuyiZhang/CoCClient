import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilleditComponent } from './skilledit.component';

describe('SkilleditComponent', () => {
  let component: SkilleditComponent;
  let fixture: ComponentFixture<SkilleditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkilleditComponent]
    });
    fixture = TestBed.createComponent(SkilleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
