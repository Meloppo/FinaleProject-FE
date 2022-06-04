/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarmodelComponent } from './carmodel.component';

describe('CarmodelComponent', () => {
  let component: CarmodelComponent;
  let fixture: ComponentFixture<CarmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
