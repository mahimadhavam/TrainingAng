import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Training} from './training.model';

import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  readonly apiUrl="http://localhost:64873/api/Trainings/";
  list:Training[];
  listOfTrainingsChanged=new Subject<boolean>();

  constructor(private _http: HttpClient) {
     
   }
   postTrainingData(data){
     let trainingdata={
       trainingName: data["trainingName"],
       startdate: data["startdate"],
       enddate: data["enddate"]
     }
     return this._http.post(this.apiUrl+'PostTraining',trainingdata)
   }

   listTrainings():Observable<Training[]>{
     return this._http.get<Training[]>(this.apiUrl);
   }

   changeCollection():Observable<boolean>{
     return this.listOfTrainingsChanged.asObservable();
   }
}
