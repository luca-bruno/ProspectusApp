import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusInstitutesPageRoutingModule } from './prospectus-institutes-routing.module';

import { ProspectusInstitutesPage } from './prospectus-institutes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusInstitutesPageRoutingModule
  ],
  declarations: [ProspectusInstitutesPage]
})
export class ProspectusInstitutesPageModule {}
