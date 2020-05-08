import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'institutes',
    children: [
    {
      path: 'view', // http://localhost:4200/institutes/view
      loadChildren: () => import('./prospectus/prospectus-institutes/prospectus-institutes.module').then( m => m.ProspectusInstitutesPageModule)
    
      },
      {
      path: 'select', // http://localhost:4200/institutes/select
      loadChildren: () => import('./prospectus/prospectus-institutes-select/prospectus-institutes-select.module').then( m => m.ProspectusInstitutesSelectPageModule)
      }
  ]
  },
  {
    path: 'courses',
    children: [
    {
      path: 'view', // http://localhost:4200/courses/view
      loadChildren: () => import('./prospectus/prospectus-courses/prospectus-courses.module').then( m => m.ProspectusCoursesPageModule)
    
      },
      {
      path: 'select', // http://localhost:4200/courses/select
      loadChildren: () => import('./prospectus/prospectus-courses-select/prospectus-courses-select.module').then( m => m.ProspectusCoursesSelectPageModule)
      }
  ]
  },
  {
    path: 'testimonials',
    children: [
    {
      path: 'view', // http://localhost:4200/testimonials/view
      loadChildren: () => import('./prospectus/prospectus-testimonials/prospectus-testimonials.module').then( m => m.ProspectusTestimonialsPageModule)
    
      },
      {
      path: 'select', // http://localhost:4200/testimonials/select
      loadChildren: () => import('./prospectus/prospectus-testimonials-select/prospectus-testimonials-select.module').then( m => m.ProspectusTestimonialsSelectPageModule)
      }
  ]
  },
  {
    path: 'pastwork',
    children: [
    {
      path: 'view', // http://localhost:4200/pastwork/view
      loadChildren: () => import('./prospectus/prospectus-pastwork/prospectus-pastwork.module').then( m => m.ProspectusPastworkPageModule)
    
      },
      {
      path: 'select', // http://localhost:4200/pastwork/select
      loadChildren: () => import('./prospectus/prospectus-pastwork-select/prospectus-pastwork-select.module').then( m => m.ProspectusPastworkSelectPageModule)
      }
  ]
  },
  {
    path: 'corporate-services', // http://localhost:4200/corporate-services
    loadChildren: () => import('./prospectus/prospectus-corporate-services/prospectus-corporate-services.module').then( m => m.ProspectusCorporateServicesPageModule)
  },
  {
    path: 'home', // http://localhost:4200/home
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
