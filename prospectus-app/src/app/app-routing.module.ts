import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'prospectus-institutes', //http://localhost:4200/prospectus-institutes
    loadChildren: () => import('./prospectus/prospectus-institutes/prospectus-institutes.module').then( m => m.ProspectusInstitutesPageModule)
  },
  {
    path: 'prospectus-courses', //http://localhost:4200/prospectus-courses
    loadChildren: () => import('./prospectus/prospectus-courses/prospectus-courses.module').then( m => m.ProspectusCoursesPageModule)
  },
  {
    path: 'prospectus-testimonials', //http://localhost:4200/prospectus-testimonials
    loadChildren: () => import('./prospectus-testimonials/prospectus-testimonials.module').then( m => m.ProspectusTestimonialsPageModule)
  },
  {
    path: 'prospectus-pastwork', //http://localhost:4200/prospectus-pastwork
    loadChildren: () => import('./prospectus-pastwork/prospectus-pastwork.module').then( m => m.ProspectusPastworkPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
