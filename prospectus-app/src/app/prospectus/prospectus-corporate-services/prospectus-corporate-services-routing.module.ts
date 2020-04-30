import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusCorporateServicesPage } from './prospectus-corporate-services.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusCorporateServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusCorporateServicesPageRoutingModule {}
