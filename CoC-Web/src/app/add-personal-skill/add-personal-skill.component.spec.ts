import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalSkillComponent } from './add-personal-skill.component';

describe('AddPersonalSkillComponent', () => {
  let component: AddPersonalSkillComponent;
  let fixture: ComponentFixture<AddPersonalSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPersonalSkillComponent]
    });
    fixture = TestBed.createComponent(AddPersonalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
