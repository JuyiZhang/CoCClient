import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { cocNewCharInfo } from 'src/data';
import { characteristic_type_enum, cocSkill } from 'src/datastructure';
import { JobSelectionComponent } from '../job-selection/job-selection.component';

@Component({
  selector: 'app-character-info-page',
  templateUrl: './character-info-page.component.html',
  styleUrls: ['./character-info-page.component.scss']
})
export class CharacterInfoPageComponent {

  @Input() basicInfoData!:{[key: string]: string}
  @Input() currentProfession!:any

  @Output() basicInfoDataChange = new EventEmitter<{[key: string]: string}>()
  @Output() currentProfessionChange = new EventEmitter<any>()
  @Output() triggerSkillChange = new EventEmitter()

  newCharacterInfo = cocNewCharInfo 
  chartypeenum = characteristic_type_enum

  constructor (
    public dialog: MatDialog
    ) {}

  setProfession() {
    let professionDialogRef = this.dialog.open(JobSelectionComponent, {
      data: this.basicInfoData["job-selection"]
    })
    professionDialogRef.afterClosed().subscribe(result => {
      this.basicInfoData["job-selection"] = result.Name
      this.currentProfession = result
      this.currentProfessionChange.emit(this.currentProfession)
      this.basicInfoDataChange.emit(this.basicInfoData)
      this.triggerSkillChange.emit(null)
    })
  }

  updateBasicInfo() {
    this.basicInfoDataChange.emit(this.basicInfoData)
  }
}
