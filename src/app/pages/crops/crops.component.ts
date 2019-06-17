import { Component, OnInit, OnDestroy } from '@angular/core';
import { FarmsService, IFarm } from '../farms/farms.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ModalConfirmationComponent } from '../shared/modal-confirmation/modal-confirmation.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICrop, CropsService } from './crops.service';
import { Subscription } from 'rxjs';
import { ModalCropFormComponent } from './modal-crop-form/modal-crop-form.component';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.scss']
})
export class CropsComponent implements OnInit, OnDestroy {
  areaID: string;
  crops: ICrop[] = [];
  farm: IFarm;
  displayedColumns: string[] = ['name', 'date', 'actions'];
  subscription: Subscription;

  constructor(
    private farmService: FarmsService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private cropsService: CropsService
  ) { }

  ngOnInit() {
    this.subscription = this.farmService.getLocalFarm().pipe(
      tap(farm => this.farm = farm),
      switchMap(() => this.route.paramMap),
      map((params: ParamMap) => params.get('id')),
      tap(areaID => this.areaID = areaID),
      switchMap(areaID => this.cropsService.getAll(this.farm.id, areaID))
    ).subscribe(crops => this.crops = crops);
  }

  onEditCrop(crop) {
    this.openDialog(crop)
  }

  onDeleteCrop(cropID) {
    const data = 'Tem certeza que deseja excluir?';
    this.dialog.open(ModalConfirmationComponent, { width: '25rem', data })
      .afterClosed()
      .subscribe(resp => resp && this.cropsService.delete(cropID, this.farm.id, this.areaID));
  }

  onAddCrop(crop) {
    this.openDialog(crop)
  }

  openDialog(crop: ICrop): void {
    this.dialog.open(ModalCropFormComponent, {
      width: '30rem',
      data: { crop, farmID: this.farm.id, areaID: this.areaID },
      autoFocus: false
    }).afterClosed().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
