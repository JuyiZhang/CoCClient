import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cocNewCharInfo } from 'src/data';

@Component({
  selector: 'app-character-property-page',
  templateUrl: './character-property-page.component.html',
  styleUrls: ['./character-property-page.component.scss']
})
export class CharacterPropertyPageComponent {
  
  @Input() propData!:{[key: string]: string}
  @Input() skillPoint!:number
  @Input() currentProfession!:any

  @Output() propDataChange = new EventEmitter<{[key: string]: string}>()
  @Output() skillPointChange = new EventEmitter<number>()
  @Output() change = new EventEmitter()

  newCharacterInfo = cocNewCharInfo

  propDataTemp:{[key: string]: string}[] = []
  propTempDataSource = new MatTableDataSource(this.propDataTemp);

  propList = ["str","con","siz","dex","app","int","pow","edu","luck"]
  maxPropPoint = 480
  luckNotIncluded = true

  hp = 0
  mp = 0
  san = 0

  randomProperty(): string {
    return (30 + Math.trunc(Math.random()*60)).toString()
  }

  generateProperty(propertyName: string) {
    this.propData[propertyName] = this.randomProperty()
  }

  generatePropertyTemp(propertyName: string, index: number) {
    if(this.propDataTemp.length < index + 1) {
      this.propDataTemp.push({})
    }
    this.propDataTemp[index][propertyName] = this.randomProperty()
  }

  generateAllProperty() {
    for (let index = 0; index < 10; index++) {
      for(let key in this.propData){
        this.generatePropertyTemp(key, index)
      }
    }
    console.log(this.propDataTemp)
    this.propTempDataSource = new MatTableDataSource(this.propDataTemp)
  }

  selectPointCombination(row: any) {
    this.propData = row
    this.togglePropTable()
    this.updateSkillPoint()
  }

  tableHidden = false
  tableHiddenHint = "隐藏属性表"
  tableHiddenDirective = "inherit"

  togglePropTable() {
    this.tableHidden = !this.tableHidden
    this.tableHiddenHint = this.tableHidden ? "显示属性表" : "隐藏属性表"
    this.tableHiddenDirective = this.tableHidden ? "none" : "inherit"
  }

  updateSkillPoint() {
    this.checkProperties()
    this.hp = Math.trunc(parseInt(this.propData["str"])/10) + Math.trunc(parseInt(this.propData["siz"])/10)
    this.mp = Math.trunc(parseInt(this.propData["pow"])/5)
    this.san = parseInt(this.propData["pow"])
    if (this.currentProfession.EDU == 4) {
      this.skillPoint = parseInt(this.propData["edu"])*4
    } else {
      this.skillPoint = parseInt(this.propData["edu"])*2
      if (this.currentProfession.DEX != "") {
        this.skillPoint += parseInt(this.propData["dex"])*2
      }
      if (this.currentProfession.APP != "") {
        this.skillPoint += parseInt(this.propData["app"])*2
      }
      if (this.currentProfession.STR != "") {
        this.skillPoint += parseInt(this.propData["str"])*2
      }
      if (this.currentProfession.DEXSTR != "") {
        this.skillPoint += Math.max(parseInt(this.propData["dex"]), parseInt(this.propData["str"]))*2
      }
      if (this.currentProfession.DEXPOW != "") {
        this.skillPoint += Math.max(parseInt(this.propData["dex"]), parseInt(this.propData["pow"]))*2
      }
      if (this.currentProfession.DEXAPP != "") {
        this.skillPoint += Math.max(parseInt(this.propData["dex"]), parseInt(this.propData["app"]))*2
      }
      if (this.currentProfession.APPPOW != "") {
        this.skillPoint += Math.max(parseInt(this.propData["pow"]), parseInt(this.propData["app"]))*2
      }
      if (this.currentProfession.EDUAPP != "") {
        this.skillPoint += Math.max(parseInt(this.propData["edu"]), parseInt(this.propData["app"]))*2
      }
      if (this.currentProfession.DEXAPPSTR != "") {
        let dexval = parseInt(this.propData["dex"]) as number
        let appval = parseInt(this.propData["app"]) as number
        let strval = parseInt(this.propData["str"]) as number
        this.skillPoint += Math.max(dexval,appval,strval)*2
      }
    }
    this.skillPointChange.emit(this.skillPoint)
    this.propDataChange.emit(this.propData)
    this.change.emit(null)

  }

  remainingPropPoint = this.maxPropPoint

  checkProperties() {
    this.remainingPropPoint = this.maxPropPoint
    for (let key in this.propData){
      this.remainingPropPoint -= this.propData[key] == "" ? 0 : parseInt(this.propData[key])
    }
    if (this.luckNotIncluded) {
      this.remainingPropPoint += this.propData["luck"] == "" ? 0 : parseInt(this.propData["luck"])
    }
  }

}
