import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule, MatNativeDateModule, MatCardModule, MatDialogModule,  MatButtonModule} from '@angular/material';
import { TrainingComponent } from './training/training.component';
import { MaterialPopupComponentComponent } from './material-popup-component/material-popup-component.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'angular2-moment';                                           


@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    MaterialPopupComponentComponent,
    TrainingListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MaterialPopupComponentComponent]
})
export class AppModule { }
