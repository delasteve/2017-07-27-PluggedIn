import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCheckboxModule, MdCardModule } from '@angular/material';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsService } from './cars.service';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    MdCardModule,
    MdCheckboxModule
  ],
  declarations: [
    CarsListComponent
  ],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
