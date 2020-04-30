import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectusCorporateServicesPageRoutingModule } from './prospectus-corporate-services-routing.module';

import { ProspectusCorporateServicesPage } from './prospectus-corporate-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectusCorporateServicesPageRoutingModule
  ],
  declarations: [ProspectusCorporateServicesPage]
})
export class ProspectusCorporateServicesPageModule {}
