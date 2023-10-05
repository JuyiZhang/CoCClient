import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { skillList } from 'src/data';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-personal-skill',
  templateUrl: './add-personal-skill.component.html',
  styleUrls: ['./add-personal-skill.component.scss']
})

export class AddPersonalSkillComponent {

  @Input() skillLimit!:number;
  @Input() personalSkill!:string[];

  @Output() personalSkillChange = new EventEmitter<string[]>()
  @Output() change = new EventEmitter()

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  skillListLocal = skillList;
  personalSkillControl = new FormControl('')
  skillNotAddable = false

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkSkillAddable()
  }
  
  checkSkillAddable() {
    this.skillNotAddable = this.personalSkill.length >= this.skillLimit
  }

  removePersonalSkill(skill: string) {
    this.checkSkillAddable()
    const index = this.personalSkill.indexOf(skill);
    if (index >= 0) {
      this.personalSkill.splice(index, 1);
    }
    this.personalSkillChange.emit(this.personalSkill)
    this.change.emit(null)
  }

  addPersonalSkill(event: MatChipInputEvent) {
    const value = (event.value || '').trim();
    this.checkSkillAddable()
    if (this.skillNotAddable) {
      return
    }
    if (value) {
      this.personalSkill.push(value);
      this.personalSkillChange.emit(this.personalSkill)
      this.change.emit(null)
    }

    // Clear the input value
    event.chipInput!.clear();

    this.personalSkillControl.setValue(null);
  }

  newPersonalSkillSelected(event: MatAutocompleteSelectedEvent) {
    this.checkSkillAddable()
    if (this.skillNotAddable) {
      return
    }
    this.personalSkill.push(event.option.viewValue);
    this.personalSkillChange.emit(this.personalSkill)
    this.change.emit(null)
    this.personalSkillControl.setValue(null);
  }
}
