import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusTestimonialsSelectPageRoutingModule } from './prospectus-testimonials-select-routing.module';

import { ProspectusTestimonialsSelectPage } from './prospectus-testimonials-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusTestimonialsSelectPageRoutingModule
  ],
  declarations: [ProspectusTestimonialsSelectPage]
})
export class ProspectusTestimonialsSelectPageModule {}
