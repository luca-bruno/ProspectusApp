import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusTestimonialsSelectPage } from './prospectus-testimonials-select.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusTestimonialsSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusTestimonialsSelectPageRoutingModule {}
