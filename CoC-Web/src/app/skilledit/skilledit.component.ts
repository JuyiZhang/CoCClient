import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { cocSkill } from 'src/datastructure';


@Component({
  selector: 'app-skilledit',
  templateUrl: './skilledit.component.html',
  styleUrls: ['./skilledit.component.scss']
})
export class SkilleditComponent {

  add_value_profession = this.data.add_value_profession
  add_value_interest = this.data.add_value_interest
  final_add_value = 0
  final_value = parseInt(this.data.final_value)
  pro_success = 0
  max_success = 0
  ultra_success = 0
  constructor(
    public dialogRef: MatDialogRef<SkilleditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:cocSkill
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.add_value_profession == null ? 0 : this.add_value_profession
    this.add_value_interest == null ? 0 : this.add_value_profession
    this.updateValue()
  }

  saveValue() {
    this.data.add_value_profession = this.add_value_profession
    this.data.add_value_interest = this.add_value_interest
    this.data.add_value = this.final_add_value.toString()
    this.data.final_value = this.final_value.toString()
  }

  updateValue() {
    let add_value_profession_local = this.add_value_profession == null ? 0 : parseInt(this.add_value_profession!);
    let add_value_interest_local = this.add_value_interest == null ? 0 : parseInt(this.add_value_interest!);
    let init_value_local = this.data.init_value == undefined ? 0 : parseInt(this.data.init_value!);
    this.final_add_value = (this.data.profession_selected ? add_value_profession_local : 0) + add_value_interest_local
    this.final_value = init_value_local + this.final_add_value
    this.pro_success = Math.trunc(this.final_value/2)
    this.max_success = Math.trunc(this.final_value/4)
    console.log(this.data)
  }
}
