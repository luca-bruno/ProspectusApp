import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusTestimonialsSelectPageRoutingModule } from './prospectus-testimonials-select-routing.module';

import { ProspectusTestimonialsSelectPage } from './prospectus-testimonials-select.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusTestimonialsSelectPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ProspectusTestimonialsSelectPage]
})
export class ProspectusTestimonialsSelectPageModule {}
