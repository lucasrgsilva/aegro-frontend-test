import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreasComponent } from './areas/areas.component';
import { CropsComponent } from './crops/crops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'areas', component: AreasComponent },
      { path: 'areas/:id', component: CropsComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }