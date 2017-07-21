import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CarsService } from '../cars.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  public cars$: Observable<Car[]>;

  constructor(
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.cars$ = this.carsService.cars$;
  }

  public boostCar(car) {
    this.carsService.boostCar(car);
  }
}
