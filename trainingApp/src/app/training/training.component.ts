import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service'; 
import { Training } from './../training.model'; 

import { Observable } from 'rxjs'; 

import { FormGroup, FormControl, Validators } from '@angular/forms'; 

import { MatDialogConfig, MatDialog } from '@angular/material';
import { ValidateUrl } from '../custom-validator';
import { MaterialPopupComponentComponent } from '../material-popup-component/material-popup-component.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  trainingFormGroup: FormGroup; 
  dialogConfig: MatDialogConfig; 
  constructor(private _service: TrainingService, private _dialog: MatDialog) { 
    this.dialogConfig = new MatDialogConfig(); 
  }


  ngOnInit() {
    this.createForm(); 
  }

  createForm() { 
    this.trainingFormGroup = new FormGroup({ 
      startdate: new FormControl('', Validators.required), 
      enddate: new FormControl('', Validators.required), 
      trainingName: new FormControl('', Validators.required) 
    }, { validators: [ValidateUrl('startdate', 'enddate')] }); 
  }

  onSubmit(values) { 
    this._service.postTrainingData(values).subscribe((res) => { 
      let resultmsg = res[0] =="result:Success" ? `${res[1]} day/s difference between Start and End Date` : 'Error while adding..!';
      let msg = res[0] =="result:Success" ?'Success':'Error';
      this.openAlertDialog(msg, `${resultmsg}`); 
      //this._service.listTrainings(); 
      this.trainingForm.reset(); 
      this.markAsUnTouched(); 
      this._service.listOfTrainingsChanged.next(true); 
    }); 
    
  }

  markAsUnTouched():void{ 
    // this.trainingForm.get('startdate').markAsUntouched(); 
    // this.trainingForm.get('enddate').markAsUntouched(); 
    // this.trainingForm.get('trainingName').markAsUntouched(); 
    this.trainingForm.get('startdate').setErrors(null); 
    this.trainingForm.get('enddate').setErrors(null); 
    this.trainingForm.get('trainingName').setErrors(null); 
  } 
  get trainingForm(): FormGroup { 
    return this.trainingFormGroup; 
  }

  openAlertDialog(title: string, description: any) { 
    this.dialogConfig.autoFocus = true; 
    this.dialogConfig.restoreFocus = true; 
    this.dialogConfig.width = '400px';                      
    this.dialogConfig.data = { 
      title: title, 
      description: description 
    } 
    const dialogRef = this._dialog.open(MaterialPopupComponentComponent, this.dialogConfig); 
    return dialogRef.afterClosed(); 
  }
}
