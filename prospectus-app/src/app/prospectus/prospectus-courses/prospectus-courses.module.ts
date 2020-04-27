import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusCoursesPageRoutingModule } from './prospectus-courses-routing.module';

import { ProspectusCoursesPage } from './prospectus-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusCoursesPageRoutingModule
  ],
  declarations: [ProspectusCoursesPage]
})
export class ProspectusCoursesPageModule {}
