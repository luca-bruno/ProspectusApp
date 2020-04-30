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
    loadChildren: () => import('./prospectus/prospectus-testimonials/prospectus-testimonials.module').then( m => m.ProspectusTestimonialsPageModule)
  },
  {
    path: 'prospectus-pastwork', //http://localhost:4200/prospectus-pastwork
    loadChildren: () => import('./prospectus/prospectus-pastwork/prospectus-pastwork.module').then( m => m.ProspectusPastworkPageModule)
  },
  {
    path: 'prospectus-courses-select', //http://localhost:4200/prospectus-courses-select
    loadChildren: () => import('./prospectus/prospectus-courses-select/prospectus-courses-select.module').then( m => m.ProspectusCoursesSelectPageModule)
  },
  {
    path: 'prospectus-institutes-select', //http://localhost:4200/prospectus-institutes-select
    loadChildren: () => import('./prospectus/prospectus-institutes-select/prospectus-institutes-select.module').then( m => m.ProspectusInstitutesSelectPageModule)
  },
  {
    path: 'prospectus-pastwork-select', //http://localhost:4200/prospectus-pastwork-select
    loadChildren: () => import('./prospectus/prospectus-pastwork-select/prospectus-pastwork-select.module').then( m => m.ProspectusPastworkSelectPageModule)
  },
  {
    path: 'prospectus-testimonials-select', //http://localhost:4200/prospectus-testimonials-select
    loadChildren: () => import('./prospectus/prospectus-testimonials-select/prospectus-testimonials-select.module').then( m => m.ProspectusTestimonialsSelectPageModule)
  },
  {
    path: 'prospectus-corporate-services', //http://localhost:4200/prospectus-corporate-services
    loadChildren: () => import('./prospectus/prospectus-corporate-services/prospectus-corporate-services.module').then( m => m.ProspectusCorporateServicesPageModule)
  },
  {
    path: 'prospectus-home', //http://localhost:4200/prospectus-home
    loadChildren: () => import('./prospectus/prospectus-home/prospectus-home.module').then( m => m.ProspectusHomePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
