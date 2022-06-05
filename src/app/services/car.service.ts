import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarModel } from '../models/carModel';
import { Photo } from '../models/photo';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient,
   private router:Router,
  private alertify:AlertifyService) {}
  path = 'https://localhost:44305/api/';
  
  getCarModels(): Observable<CarModel[]> {
    return this.httpClient.get<CarModel[]>(this.path + 'carmodels');
  }

getCarModelById(carModelId:number):Observable<CarModel>{
  return this.httpClient.get<CarModel>(this.path+'carmodels/detail/?id='+carModelId)
}

getPhotosByCarModel(carModelId:number):Observable<Photo[]>{
  return this.httpClient.get<Photo[]>(this.path+"carmodels/photos/?carModelId="+carModelId)
}

add(carModel:any){
  this.httpClient.post(this.path+"carmodels/add", carModel).subscribe(
    data=>{
      this.alertify.success('Car is Added Successfully.')
    }
  );
 
}

}
