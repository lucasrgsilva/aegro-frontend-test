import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ICrop, CropsService } from '../crops.service';

@Component({
  selector: 'app-modal-crop-form',
  templateUrl: './modal-crop-form.component.html',
  styleUrls: ['./modal-crop-form.component.scss']
})
export class ModalCropFormComponent implements OnInit {
  crop: ICrop;

  constructor(
    public dialogRef: MatDialogRef<ModalCropFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { crop: ICrop, areaID: string, farmID: string },
    private cropsService: CropsService,
  ) { }

  ngOnInit() {
    this.crop = { 
      ...this.data.crop, 
      farmID: this.data.farmID,
      areaID: this.data.areaID
    };
  }

  onCloseConfirm() {
    this.crop.date = this.formatDate(this.crop.date);
    
    if (this.crop.id) {
      this.cropsService.update(this.crop, this.data.farmID, this.data.areaID).subscribe();
    } else {
      this.cropsService.add(this.crop, this.data.farmID, this.data.areaID).subscribe()
    }
    this.dialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  formatDate(curDate: any) {
    const date = new Date(curDate);
    return date.toJSON().substring(10, 0);
  }
}
