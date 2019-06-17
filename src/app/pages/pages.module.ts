import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalAreaFormComponent } from './areas/modal-area-form/modal-area-form.component';

import { AreasComponent } from './areas/areas.component';
import { CropsComponent } from './crops/crops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmsComponent } from './farms/farms.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ModalConfirmationComponent } from './shared/modal-confirmation/modal-confirmation.component';

@NgModule({
  declarations: [
    AreasComponent,
    CropsComponent,
    DashboardComponent,
    FarmsComponent,
    PagesComponent,
    ModalAreaFormComponent,
    ModalConfirmationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    PagesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    ModalAreaFormComponent,
    ModalConfirmationComponent,
  ],
})
export class PagesModule { }
