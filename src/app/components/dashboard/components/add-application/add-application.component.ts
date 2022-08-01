import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent implements OnInit {

  applicationName: string;
  applicationVersion: string;
  constructor(
    public dialogRef: MatDialogRef<AddApplicationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.dialogRef.close(
      {
        data: this.data,
        applicationName: this.applicationName,
        applicationVersion: this.applicationVersion
      }
    )
  }

  onReset() {
    this.applicationName = '';
    this.applicationVersion = '';
  }

}
