import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusHomePage } from './prospectus-home.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusHomePageRoutingModule {}
