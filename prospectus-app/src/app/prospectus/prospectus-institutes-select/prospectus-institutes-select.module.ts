import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusInstitutesSelectPageRoutingModule } from './prospectus-institutes-select-routing.module';

import { ProspectusInstitutesSelectPage } from './prospectus-institutes-select.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusInstitutesSelectPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ProspectusInstitutesSelectPage]
})
export class ProspectusInstitutesSelectPageModule {}
