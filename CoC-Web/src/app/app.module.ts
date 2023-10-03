import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ModulesComponent } from './modules/modules.component';
import { RecordComponent } from './record/record.component';
import { SettingsComponent } from './settings/settings.component';
import { CharacterComponent } from './character/character.component';
import { LogoutComponent } from './logout/logout.component';
import { RecruitComponent } from './recruit/recruit.component';
import { AddcharComponent } from './addchar/addchar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ModulesComponent,
    RecordComponent,
    SettingsComponent,
    CharacterComponent,
    LogoutComponent,
    RecruitComponent,
    AddcharComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatRippleModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
