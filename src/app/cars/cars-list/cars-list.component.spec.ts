import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListComponent } from './cars-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarsService } from 'app/cars/cars.service';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarsService],
      declarations: [ CarsListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
