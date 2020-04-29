import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusPastworkPageRoutingModule } from './prospectus-pastwork-routing.module';

import { ProspectusPastworkPage } from './prospectus-pastwork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusPastworkPageRoutingModule
  ],
  declarations: [ProspectusPastworkPage]
})
export class ProspectusPastworkPageModule {}
