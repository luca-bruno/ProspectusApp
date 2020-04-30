import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusCoursesSelectPageRoutingModule } from './prospectus-courses-select-routing.module';

import { ProspectusCoursesSelectPage } from './prospectus-courses-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusCoursesSelectPageRoutingModule
  ],
  declarations: [ProspectusCoursesSelectPage]
})
export class ProspectusCoursesSelectPageModule {}
