import { Component, OnInit } from '@angular/core';
import { FarmsService, IFarm } from '../farms/farms.service';
import { switchMap, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ModalAreaFormComponent } from './modal-area-form/modal-area-form.component';
import { IArea, AreasService } from './areas.service';
import { ModalConfirmationComponent } from '../shared/modal-confirmation/modal-confirmation.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  areas: IArea[] = [];
  farm: IFarm;
  displayedColumns: string[] = ['name', 'hectares', 'actions'];

  constructor(
    private areaService: AreasService,
    private farmService: FarmsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.farmService.getLocalFarm().pipe(
      tap(farm => this.farm = farm),
      switchMap(farm => this.areaService.getAll(farm))
    ).subscribe(areas => this.areas = areas);
  }

  onEditArea(area) {
    this.openDialog(area)
  }

  onDeleteArea(area) {
    const data = 'Tem certeza que deseja excluir?';
    this.dialog.open(ModalConfirmationComponent, { width: '25rem', data })
      .afterClosed()
      .subscribe(resp => resp && this.areaService.delete(area, this.farm));
  }

  onAddArea(area) {
    this.openDialog(area)
  }

  openDialog(area): void {
    this.dialog.open(ModalAreaFormComponent, {
      width: '30rem',
      data: { area, farm: this.farm },
      autoFocus: false
    }).afterClosed().subscribe();
  }

  get totalArea() {
    return this.areas.map(t => t.hectares).reduce((total, value) => total + value, 0);
  }
}
