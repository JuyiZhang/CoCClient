import { Component, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { cocNewCharInfo, personalItemContent, weaponInfo, weaponList, weaponNameList, weaponNamingList } from 'src/data';
import { characteristic_type_enum, cocSkill } from 'src/datastructure';
import { MatDialog } from '@angular/material/dialog';
import { SkilleditComponent } from '../skilledit/skilledit.component';
import { JobSelectionComponent } from '../job-selection/job-selection.component';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
import { WeaponDetailComponent } from '../weapon-detail/weapon-detail.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-addchar',
  templateUrl: './addchar.component.html',
  styleUrls: ['./addchar.component.scss'],
})
export class AddcharComponent {

  newCharacterInfo = cocNewCharInfo 

  selectedProfessionalSkill:string[] = []
  currentProfession: any;

  basicInfoData:{[key: string]: string} = {
    "name": "",
    "time": "",
    "job-selection": "",
    "age": "",
    "sex": "",
    "resident": "",
    "hometown": "",
  }

  propData:{[key: string]: string} = {
    "str": "",
    "con": "",
    "siz": "",
    "dex": "",
    "app": "",
    "int": "",
    "pow": "",
    "edu": "",
    "luck": "",
  }

  skills: cocSkill[] = [{
    name: "会计", init_value: "5", final_value: "5"
  }, {
    name: "人类学", init_value: "1", final_value: "1"
  }, {
    name: "估价", init_value: "5", final_value: "5"
  }, {
    name: "考古学", init_value: "1", final_value: "1"
  }, {
    name: "技艺①", init_value: "5", final_value: "5",
    annotation_allowed: true,
  }, {
    name: "技艺②", init_value: "5", final_value: "5",
    annotation_allowed: true,
  }, {
    name: "技艺③", init_value: "5", final_value: "5",
    annotation_allowed: true,
  }, {
    name: "取悦", init_value: "15", final_value: "15"
  }, {
    name: "攀爬", init_value: "20", final_value: "20"
  }, {
    name: "计算机使用Ω", init_value: "5", final_value: "5"
  }, {
    name: "信用评级", init_value: "0", final_value: "0"
  }, {
    name: "克苏鲁神话", init_value: "0", final_value: "0"
  }, {
    name: "乔装", init_value: "5", final_value: "5"
  }, {
    name: "闪避", init_value: "0", final_value: "0"
  }, {
    name: "汽车驾驶", init_value: "20", final_value: "20"
  }, {
    name: "电气维修", init_value: "10", final_value: "10"
  }, {
    name: "电子学Ω", init_value: "1", final_value: "1"
  }, {
    name: "话术", init_value: "5", final_value: "5"
  }, {
    name: "格斗：斗殴", init_value: "25", final_value: "25"
  }, {
    name: "格斗①", init_value: "", final_value: "",
    annotation_allowed: true,
  }, {
    name: "格斗②", init_value: "", final_value: "",
    annotation_allowed: true,
  }, {
    name: "格斗③", init_value: "", final_value: "",
    annotation_allowed: true,
  }, {
    name: "射击：手枪", init_value: "20", final_value: "20"
  }, {
    name: "射击①", init_value: "", final_value: "",
    annotation_allowed: true,
  }, {
    name: "射击②", init_value: "", final_value: "",
    annotation_allowed: true,
  }, {
    name: "射击③", init_value: "", final_value: "",
    annotation_allowed: true,
  }, {
    name: "急救", init_value: "30", final_value: "30"
  }, {
    name: "历史", init_value: "5", final_value: "5"
  }, {
    name: "恐吓", init_value: "15", final_value: "15"
  }, {
    name: "跳跃", init_value: "20", final_value: "20"
  }, {
    name: "外语①", init_value: "1", final_value: "1"
  }, {
    name: "外语②", init_value: "1", final_value: "1"
  }, {
    name: "外语③", init_value: "1", final_value: "1"
  }, {
    name: "母语", init_value: "", final_value: ""
  }, {
    name: "法律", init_value: "5", final_value: "5"
  }, {
    name: "图书馆使用", init_value: "20", final_value: "20"
  }, {
    name: "聆听", init_value: "20", final_value: "20"
  }, {
    name: "锁匠", init_value: "1", final_value: "1"
  }, {
    name: "机械维修", init_value: "10", final_value: "10"
  }, {
    name: "医学", init_value: "1", final_value: "1"
  }, {
    name: "博物学", init_value: "10", final_value: "10"
  }, {
    name: "导航", init_value: "10", final_value: "10"
  }, {
    name: "神秘学", init_value: "5", final_value: "5"
  }, {
    name: "操作重型机械", init_value: "1", final_value: "1"
  }, {
    name: "说服", init_value: "10", final_value: "10"
  }, {
    name: "驾驶：", init_value: "1", final_value: "1"
  }, {
    name: "精神分析", init_value: "1", final_value: "1"
  }, {
    name: "心理学", init_value: "10", final_value: "10"
  }, {
    name: "骑术", init_value: "5", final_value: "5"
  }, {
    name: "科学①", init_value: "1", final_value: "1",
    annotation_allowed: true,
  }, {
    name: "科学②", init_value: "1", final_value: "1",
    annotation_allowed: true,
  }, {
    name: "科学③", init_value: "1", final_value: "1",
    annotation_allowed: true,
  }, {
    name: "妙手", init_value: "10", final_value: "10"
  }, {
    name: "侦查", init_value: "25", final_value: "25"
  }, {
    name: "潜行", init_value: "20", final_value: "20"
  }, {
    name: "生存：", init_value: "10", final_value: "10"
  }, {
    name: "游泳", init_value: "20", final_value: "20"
  }, {
    name: "投掷", init_value: "20", final_value: "20"
  }, {
    name: "追踪", init_value: "10", final_value: "10"
  }, {
    name: "驯兽", init_value: "5", final_value: "5"
  }, {
    name: "潜水", init_value: "1", final_value: "1"
  }, {
    name: "爆破", init_value: "1", final_value: "1"
  }, {
    name: "读唇", init_value: "1", final_value: "1"
  }, {
    name: "催眠", init_value: "1", final_value: "1"
  }, {
    name: "炮术", init_value: "1", final_value: "1"
  }, {
    name: "学识：", init_value: "1", final_value: "1"
  }];

  weapons:{[key: string]: string}[] = []
  
  skillPoint = 0
  interestPoint = 0
  skillLimit = 0
  
  personalSkill:string[] = [];

  hp = 0
  mp = 0
  san = 0

  personalItemItemList = personalItemContent
  personalItemList:{[key: string]: string}[] = []
  personalItemListDataSource = new MatTableDataSource(this.personalItemList)
  personalItemColumnName = ['item_name','item_position','item_content','item_reveal','remove']
  addNewPersonalItem = false
  inEditPersonalItem:{[key: string]: string} = {}

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
    while (this.personalSkill.length > this.skillLimit) {
      this.personalSkill.pop()
    }
  }

  checkInfo() {
    console.log(this.basicInfoData)
  }

  checkSkill() {
    console.log(this.skills)
  }
  submitInfo() {
    console.log(this.basicInfoData)
  }

  updateSkillPoint() {
    this.hp = Math.trunc(parseInt(this.propData["str"])/10) + Math.trunc(parseInt(this.propData["siz"])/10)
    this.mp = Math.trunc(parseInt(this.propData["pow"])/5)
    this.san = parseInt(this.propData["pow"])
    this.interestPoint = parseInt(this.propData["int"])*2
  }

  

  submitCharacter() {
    let characterInfo = {
      "basicInfo": this.basicInfoData,
      "property": this.propData,
      "skill": this.skills,
      "weapon": this.weapons
    }
  }

  addNewItem() {
    this.addNewPersonalItem = true
  }

  removePersonalItem(row: any) {
    let index = this.personalItemList.indexOf(row)
    this.personalItemList.splice(index,1)
    this.personalItemListDataSource = new MatTableDataSource(this.personalItemList)
  }

  addPersonalItem() {
    this.personalItemList.push(this.inEditPersonalItem)
    this.inEditPersonalItem = {}
    this.personalItemListDataSource = new MatTableDataSource(this.personalItemList)
  }

  editPersonalItem(row: any) {
    this.inEditPersonalItem = row
    this.removePersonalItem(row)
  }

  onListDrop(event: any){
    const prevIndex = this.personalItemList.findIndex((d) => d === event.item.data);
    moveItemInArray(this.personalItemList, prevIndex, event.currentIndex)
    this.personalItemListDataSource = new MatTableDataSource(this.personalItemList)
  }
}
