import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusCoursesSelectPageRoutingModule } from './prospectus-courses-select-routing.module';

import { ProspectusCoursesSelectPage } from './prospectus-courses-select.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusCoursesSelectPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ProspectusCoursesSelectPage]
})
export class ProspectusCoursesSelectPageModule {}
