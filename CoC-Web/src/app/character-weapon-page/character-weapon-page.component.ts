import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeaponDetailComponent } from '../weapon-detail/weapon-detail.component';
import { MatTableDataSource } from '@angular/material/table';
import { weaponInfo, weaponNameList, weaponNamingList } from 'src/data';

@Component({
  selector: 'app-character-weapon-page',
  templateUrl: './character-weapon-page.component.html',
  styleUrls: ['./character-weapon-page.component.scss']
})
export class CharacterWeaponPageComponent {

  @Input() weapons:{[key: string]: string}[] = []
  @Output() weaponsChange = new EventEmitter<{[key: string]: string}[]>()

  weaponsDataSource = new MatTableDataSource(this.weapons)
  weaponInfo = weaponInfo
  weaponName = weaponNameList
  weaponColumnName = weaponNamingList

  constructor (
    public dialog: MatDialog
    ) {}

  showWeaponDetail(row: any) {
    console.log(this.weapons.length)
    let currentWeapon = row
    let weaponDialogRef = this.dialog.open(WeaponDetailComponent, {
      data: row
    })
    weaponDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.weapons.push(currentWeapon)
        this.weaponsDataSource = new MatTableDataSource(this.weapons)
        this.weaponsChange.emit(this.weapons)
      }
    })
  }
}
