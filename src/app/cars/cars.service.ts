import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

import { Car } from './models/car';

const CARS: Car[] = [
  { year: 1999, make: 'Aston', model: 'Martin DB7', nickname: 'Mary', isBoosted: false },
  { year: 1962, make: 'Aston', model: 'Martin DB1', nickname: 'Barbara', isBoosted: false },
  { year: 1999, make: 'Bentley', model: 'Arnage', nickname: 'Lindsey', isBoosted: false },
  { year: 1999, make: 'Bentley', model: 'Azure', nickname: 'Laura', isBoosted: false },
  { year: 1964, make: 'Bentley', model: 'Continental', nickname: 'Alma', isBoosted: false },
  { year: 1959, make: 'Cadillac', model: 'El Dorado', nickname: 'Madeline', isBoosted: false },
  { year: 1958, make: 'Cadillac', model: 'El Dorado Brougham', nickname: 'Patricia', isBoosted: false },
  { year: 1999, make: 'Cadillac', model: 'Escalade', nickname: 'Carol', isBoosted: false },
  { year: 2000, make: 'Cadillac', model: 'El Dorado STS', nickname: 'Daniela', isBoosted: false },
  { year: 1957, make: 'Chevrolet', model: 'Bel Air Convertible', nickname: 'Stefanie', isBoosted: false },
  { year: 1969, make: 'Chevrolet', model: 'Camaro Z28', nickname: 'Erin', isBoosted: false },
  { year: 1953, make: 'Chevrolet', model: 'Corvette', nickname: 'Pamela', isBoosted: false },
  { year: 1967, make: 'Chevrolet', model: 'Corvette Stingray Big Block', nickname: 'Stacey', isBoosted: false },
  { year: 2000, make: 'Ford', model: 'F350 4x4 modified pick- up', nickname: 'Anne', isBoosted: false },
  { year: 1971, make: 'DeTomaso', model: 'Pantera', nickname: 'Kate', isBoosted: false },
  { year: 1969, make: 'Dodge', model: 'Daytona', nickname: 'Vanessa', isBoosted: false },
  { year: 1998, make: 'Dodge', model: 'Viper Coupe GTS', nickname: 'Denise', isBoosted: false },
  { year: 1995, make: 'Ferrari', model: '355 B', nickname: 'Diane', isBoosted: false },
  { year: 1997, make: 'Ferrari', model: '355 F1', nickname: 'Iris', isBoosted: false },
  { year: 1967, make: 'Ferrari', model: '265 GTB4', nickname: 'Nadine', isBoosted: false },
  { year: 1999, make: 'Ferrari', model: '550 Maranello', nickname: 'Angelina', isBoosted: false },
  { year: 1987, make: 'Ferrari', model: 'Testarosa', nickname: 'Rose', isBoosted: false },
  { year: 1956, make: 'Ford', model: 'T - Bird', nickname: 'Susan', isBoosted: false },
  { year: 2000, make: 'GMC', model: 'Yukon', nickname: 'Megan', isBoosted: false },
  { year: 1999, make: 'HumVee', model: '2 - Door Pickup', nickname: 'Tracy', isBoosted: false },
  { year: 1999, make: 'Infiniti', model: 'Q45', nickname: 'Rachel', isBoosted: false },
  { year: 1994, make: 'Jaguar', model: 'XJ 220', nickname: 'Bernadene', isBoosted: false },
  { year: 1999, make: 'Jaguar', model: 'XK8 Coupe', nickname: 'Deborah', isBoosted: false },
  { year: 1990, make: 'Lamborghini', model: 'LM SUV', nickname: 'Gina', isBoosted: false },
  { year: 1999, make: 'Lexus', model: 'LS 400', nickname: 'Hillary', isBoosted: false },
  { year: 1999, make: 'Lincoln', model: 'Navigator', nickname: 'Kimberley', isBoosted: false },
  { year: 1957, make: 'Mercedes', model: 'Benz 300 SL/ Gullwing', nickname: 'Dorothy', isBoosted: false },
  { year: 1999, make: 'Mercedes', model: 'Benz CL 500', nickname: 'Donna', isBoosted: false },
  { year: 1999, make: 'Mercedes', model: 'Benz S 600', nickname: 'Samantha', isBoosted: false },
  { year: 1998, make: 'Mercedes', model: 'Benz SL 600', nickname: 'Ellen', isBoosted: false },
  { year: 1950, make: 'Mercury', model: 'Custom', nickname: 'Gabriela', isBoosted: false },
  { year: 1971, make: 'Plymouth', model: 'Hemi Cuda', nickname: 'Shannon', isBoosted: false },
  { year: 1969, make: 'Plymouth', model: 'Roadrunner', nickname: 'Jessica', isBoosted: false },
  { year: 1965, make: 'Pontiac', model: 'GTO', nickname: 'Sharon', isBoosted: false },
  { year: 1999, make: 'Porsche', model: '996', nickname: 'Tina', isBoosted: false },
  { year: 2000, make: 'Porsche', model: 'Boxster', nickname: 'Marsha', isBoosted: false },
  { year: 1961, make: 'Porsche', model: 'Speedster', nickname: 'Natalie', isBoosted: false },
  { year: 1988, make: 'Porsche', model: '959', nickname: 'Virginia', isBoosted: false },
  { year: 1997, make: 'Porsche', model: '911 Twin Turbo', nickname: 'Tanya', isBoosted: false },
  { year: 2000, make: 'Rolls', model: 'Royce Stretch Limousine', nickname: 'Grace', isBoosted: false },
  { year: 1966, make: 'Shelby', model: 'AC Cobra', nickname: 'Ashley', isBoosted: false },
  { year: 1967, make: 'Shelby', model: 'Mustang GT 500', nickname: 'Eleanor', isBoosted: false },
  { year: 2000, make: 'Toyota', model: 'Landcruiser', nickname: 'Cathy', isBoosted: false },
  { year: 1998, make: 'Toyota', model: 'Supra Turbo', nickname: 'Lynn', isBoosted: false },
  { year: 2000, make: 'Volvo', model: 'Turbo Wagon R', nickname: 'Lisa', isBoosted: false }
]

@Injectable()
export class CarsService {
  private cars: BehaviorSubject<Car[]>;
  private dataStore: {
    cars: Car[]
  };

  constructor() {
    this.dataStore = { cars: CARS };
    this.cars = new BehaviorSubject<Car[]>(this.dataStore.cars);

  }

  get cars$(): Observable<Car[]> {
    return this.cars.asObservable();
  }

  boostCar(boostedCar: Car) {
    this.dataStore
      .cars
      .forEach((car, index) => {
        if (car.nickname === boostedCar.nickname) {
          this.dataStore.cars[index].isBoosted = !boostedCar.isBoosted;
        }
      });

    this.cars.next(Object.assign({}, this.dataStore).cars);
  }
}
