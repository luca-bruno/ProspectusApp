import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusPastworkPage } from './prospectus-pastwork.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusPastworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusPastworkPageRoutingModule {}
