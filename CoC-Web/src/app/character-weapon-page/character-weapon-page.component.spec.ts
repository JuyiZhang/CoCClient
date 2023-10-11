import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterWeaponPageComponent } from './character-weapon-page.component';

describe('CharacterWeaponPageComponent', () => {
  let component: CharacterWeaponPageComponent;
  let fixture: ComponentFixture<CharacterWeaponPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterWeaponPageComponent]
    });
    fixture = TestBed.createComponent(CharacterWeaponPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
