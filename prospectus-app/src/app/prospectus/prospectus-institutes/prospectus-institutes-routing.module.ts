import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusInstitutesPage } from './prospectus-institutes.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusInstitutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusInstitutesPageRoutingModule {}
