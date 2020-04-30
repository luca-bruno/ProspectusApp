import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusCoursesSelectPage } from './prospectus-courses-select.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusCoursesSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusCoursesSelectPageRoutingModule {}
