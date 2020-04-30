import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusInstitutesSelectPage } from './prospectus-institutes-select.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusInstitutesSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusInstitutesSelectPageRoutingModule {}
