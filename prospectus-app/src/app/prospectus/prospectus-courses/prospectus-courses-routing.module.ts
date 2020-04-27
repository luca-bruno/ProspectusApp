import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProspectusCoursesPage } from './prospectus-courses.page';

const routes: Routes = [
  {
    path: '',
    component: ProspectusCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProspectusCoursesPageRoutingModule {}
