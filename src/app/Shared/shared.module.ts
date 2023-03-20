import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRating } from './star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ StarRating ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    FormsModule,CommonModule,StarRating,ReactiveFormsModule
  ]
})
export class SharedModule { }
