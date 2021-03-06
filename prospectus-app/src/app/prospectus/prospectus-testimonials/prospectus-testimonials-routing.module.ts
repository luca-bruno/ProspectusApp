import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusTestimonialsPage } from './prospectus-testimonials.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusTestimonialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusTestimonialsPageRoutingModule {}
