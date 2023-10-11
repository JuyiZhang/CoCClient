import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { cocSkill } from 'src/datastructure';
import { SkilleditComponent } from '../skilledit/skilledit.component';

@Component({
  selector: 'app-character-skill-page',
  templateUrl: './character-skill-page.component.html',
  styleUrls: ['./character-skill-page.component.scss']
})
export class CharacterSkillPageComponent {

  @Input() currentProfession!: any
  @Input() personalSkill!: string[]
  @Input() skills!: cocSkill[]
  @Input() skillLimit!: number
  @Input() skillPoint!: number
  @Input() interestPoint!: number
  @Output() skillsChange = new EventEmitter<cocSkill[]>()
  @Output() personalSkillChange = new EventEmitter<string[]>()

  remainingSkillPoint = 0
  remainingInterestPoint = 0

  constructor (
    public dialog: MatDialog
    ) {}

    
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  getSkills() {
    let skillDataString = this.currentProfession.Skills as string
    let skillSplit = skillDataString.split("，")
    this.skills.forEach(skill => {
      let isPersonalSkill = this.personalSkill.includes(skill.name)
      if (skillDataString.includes(skill.name) || isPersonalSkill){
        skill.profession_selectable = true
      } else if (skill.profession_selectable) {
        skill.profession_selectable = undefined
      }
      if (skillSplit.includes(skill.name) || isPersonalSkill) {
        skill.profession_selected = true
      } else if (skill.profession_selected) {
        skill.profession_selected = undefined
      }
    });
    if (skillDataString.includes("一项其他") || skillDataString.includes("其他一项")) {
      this.skillLimit = 1
    } else if (skillDataString.includes("两项其他") || skillDataString.includes("其他两项")) {
      this.skillLimit = 2
    } else if (skillDataString.includes("三项其他") || skillDataString.includes("其他三项")) {
      this.skillLimit = 3
    }
    this.skillsChange.emit(this.skills)
  }

  selectProfession(skill: cocSkill) {
    skill.profession_selected = !skill.profession_selected
  }

  checkPoint() {
    this.remainingSkillPoint = this.skillPoint
    this.remainingInterestPoint = this.interestPoint
    this.skills.forEach(skill => {
      this.remainingSkillPoint -= skill.add_value_profession==undefined ? 0 : parseInt(skill.add_value_profession)
      this.remainingInterestPoint -= skill.add_value_interest==undefined ? 0 : parseInt(skill.add_value_interest)
    });
  }

  editSkill(skill: cocSkill) {
    let skillDialogRef = this.dialog.open(SkilleditComponent, {
      data: skill
    })
    skillDialogRef.afterClosed().subscribe(result => {
      this.checkPoint()
    })
    this.skillsChange.emit(this.skills)
  }
}
