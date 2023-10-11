import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPropertyPageComponent } from './character-property-page.component';

describe('CharacterPropertyPageComponent', () => {
  let component: CharacterPropertyPageComponent;
  let fixture: ComponentFixture<CharacterPropertyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterPropertyPageComponent]
    });
    fixture = TestBed.createComponent(CharacterPropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
