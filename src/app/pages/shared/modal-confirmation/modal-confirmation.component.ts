import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmationComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit() {
  }
}
