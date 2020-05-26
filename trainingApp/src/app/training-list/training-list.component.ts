import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service'; 
import { Training } from './../training.model'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  listTraining:Observable<Training[]>;

  constructor(private _service:TrainingService) { 
    this._service.changeCollection().subscribe((res) =>{
      this.listTraining=this._service.listTrainings();
    });
  }

  ngOnInit() {
    this.listTraining=this._service.listTrainings();
  }
  

}
