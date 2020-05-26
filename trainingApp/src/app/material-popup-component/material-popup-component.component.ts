import { Component, OnInit,Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-material-popup-component',
  templateUrl: './material-popup-component.component.html',
  styleUrls: ['./material-popup-component.component.css']
})
export class MaterialPopupComponentComponent implements OnInit {
  popupTitle:string;
  popupDescription:string;

  constructor(@Inject(MAT_DIALOG_DATA) _data, private dialogRef:MatDialogRef<MaterialPopupComponentComponent, any>,) { 
    this.popupTitle=_data.title;
    this.popupDescription=_data.description;
  }

  ngOnInit(): void {
  }
  close(message){
    this.dialogRef.close(message);
  }

}
