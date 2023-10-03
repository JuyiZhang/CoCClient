import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddcharComponent } from './addchar/addchar.component';
import { CharacterComponent } from './character/character.component';
import { LogoutComponent } from './logout/logout.component';
import { ModulesComponent } from './modules/modules.component';
import { RecordComponent } from './record/record.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { RecruitComponent } from './recruit/recruit.component';


const routes: Routes = [
  {path: 'addchar', component: AddcharComponent},
  {path: 'character', component: CharacterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'home', component: MainpageComponent},
  {path: 'modules', component: ModulesComponent},
  {path: 'record', component: RecordComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'recruit', component: RecruitComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
