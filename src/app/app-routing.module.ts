import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pages',
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }