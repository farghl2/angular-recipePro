import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const MaterialComponents =[
  MatSlideToggleModule
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class AngularMaterilaModule { }
