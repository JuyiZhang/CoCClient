import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cocSkill } from 'src/datastructure';
import { profession_data } from 'src/profession-data';

@Component({
  selector: 'app-job-selection',
  templateUrl: './job-selection.component.html',
  styleUrls: ['./job-selection.component.scss']
})
export class JobSelectionComponent {
  profession = profession_data
  displayedColumns:string[] = ["name","credit","point","skill"]
  constructor(
    public dialogRef: MatDialogRef<JobSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:string
  ) {}

}
