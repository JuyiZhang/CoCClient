import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBackgroundInfoPageComponent } from './character-background-info-page.component';

describe('CharacterBackgroundInfoPageComponent', () => {
  let component: CharacterBackgroundInfoPageComponent;
  let fixture: ComponentFixture<CharacterBackgroundInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterBackgroundInfoPageComponent]
    });
    fixture = TestBed.createComponent(CharacterBackgroundInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
