import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmsComponent } from './farms/farms.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    FarmsComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
