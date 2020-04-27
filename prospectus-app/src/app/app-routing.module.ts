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
    path: 'prospectus-institutes',
    loadChildren: () => import('./prospectus/prospectus-institutes/prospectus-institutes.module').then( m => m.ProspectusInstitutesPageModule)
  },
  {
    path: 'prospectus-courses',
    loadChildren: () => import('./prospectus/prospectus-courses/prospectus-courses.module').then( m => m.ProspectusCoursesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
