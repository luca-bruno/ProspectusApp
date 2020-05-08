import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusPastworkPageRoutingModule } from './prospectus-pastwork-routing.module';

import { ProspectusPastworkPage } from './prospectus-pastwork.page';
import { SharedComponentsModule } from 'src/app/modules/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusPastworkPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [ProspectusPastworkPage]
})
export class ProspectusPastworkPageModule {}
