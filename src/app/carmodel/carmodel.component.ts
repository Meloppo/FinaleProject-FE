import { Component, OnInit } from '@angular/core';
import { CarModel } from '../models/carModel';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-carmodel',
  templateUrl: './carmodel.component.html',
  styleUrls: ['./carmodel.component.css'],
  providers:[CarService]
})
export class CarmodelComponent implements OnInit {

  constructor(private carService:CarService) { }
  carModels:CarModel[]=[]
  ngOnInit() {
    this.carService.getCarModels().subscribe(data=>{

      this.carModels=data
    })

  }

}
