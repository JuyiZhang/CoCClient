import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkillPageComponent } from './character-skill-page.component';

describe('CharacterSkillPageComponent', () => {
  let component: CharacterSkillPageComponent;
  let fixture: ComponentFixture<CharacterSkillPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSkillPageComponent]
    });
    fixture = TestBed.createComponent(CharacterSkillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
