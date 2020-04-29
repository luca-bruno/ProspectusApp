import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusTestimonialsPageRoutingModule } from './prospectus-testimonials-routing.module';

import { ProspectusTestimonialsPage } from './prospectus-testimonials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusTestimonialsPageRoutingModule
  ],
  declarations: [ProspectusTestimonialsPage]
})
export class ProspectusTestimonialsPageModule {}
