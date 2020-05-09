import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteCoursesPageRoutingModule } from './favourite-courses-routing.module';

import { FavouriteCoursesPage } from './favourite-courses.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteCoursesPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [FavouriteCoursesPage]
})
export class FavouriteCoursesPageModule {}
