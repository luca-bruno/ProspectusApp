import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusPastworkSelectPage } from './prospectus-pastwork-select.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusPastworkSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusPastworkSelectPageRoutingModule {}
