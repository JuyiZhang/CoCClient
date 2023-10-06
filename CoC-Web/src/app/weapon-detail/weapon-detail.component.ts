import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { weaponNameList, weaponNameListDetailed } from 'src/data';

@Component({
  selector: 'app-weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: ['./weapon-detail.component.scss']
})
export class WeaponDetailComponent {

  weaponInfoList = weaponNameListDetailed

  constructor(
    public dialogRef: MatDialogRef<WeaponDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{[key: string]: string}
  ) {}

  selectJob(row: any) {
    this.data = row.Name
  }
}
