import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusPastworkSelectPageRoutingModule } from './prospectus-pastwork-select-routing.module';

import { ProspectusPastworkSelectPage } from './prospectus-pastwork-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusPastworkSelectPageRoutingModule
  ],
  declarations: [ProspectusPastworkSelectPage]
})
export class ProspectusPastworkSelectPageModule {}
