import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { IArea, AreasService } from '../areas.service';
import { IFarm } from '../../farms/farms.service';

@Component({
  selector: 'app-modal-area-form',
  templateUrl: './modal-area-form.component.html',
  styleUrls: ['./modal-area-form.component.scss']
})
export class ModalAreaFormComponent implements OnInit {
  area: IArea;

  constructor(
    public dialogRef: MatDialogRef<ModalAreaFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { farm: IFarm, area: IArea },
    private areasService: AreasService,
  ) { }

  ngOnInit() {
    this.area = { ...this.data.area };
  }

  onCloseConfirm() {
    if (this.area.id) {
      this.areasService.update(this.area, this.data.farm).subscribe();
    } else {
      this.areasService.add(this.area, this.data.farm).subscribe()
    }
    this.dialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }
}
