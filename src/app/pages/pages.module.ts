import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatInputModule, MatNativeDateModule, MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChartsModule } from 'ng2-charts';

import { AreasComponent } from './areas/areas.component';
import { CropsComponent } from './crops/crops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmsComponent } from './farms/farms.component';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ModalConfirmationComponent } from './shared/modal-confirmation/modal-confirmation.component';
import { ModalCropFormComponent } from './crops/modal-crop-form/modal-crop-form.component';
import { ModalAreaFormComponent } from './areas/modal-area-form/modal-area-form.component';

@NgModule({
  declarations: [
    AreasComponent,
    CropsComponent,
    DashboardComponent,
    FarmsComponent,
    PagesComponent,
    ModalAreaFormComponent,
    ModalConfirmationComponent,
    ModalCropFormComponent,
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
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    MatCardModule,
  ],
  entryComponents: [
    ModalAreaFormComponent,
    ModalConfirmationComponent,
    ModalCropFormComponent,
  ],
})
export class PagesModule { }
