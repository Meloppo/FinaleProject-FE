import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import{FormGroup,Validators,FormControl,FormBuilder} from "@angular/forms"
import { CarModel } from 'src/app/models/carModel';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[CarService]
})
export class AddComponent implements OnInit {

  constructor(private carService:CarService,
     private formBuilder:FormBuilder) { }
  carModel!: CarModel;
  carAddForm!: FormGroup;

  
  createCarForm(){
   this.carAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createCarForm();
  }

  add(){
    if(this.carAddForm.valid){
      this.carModel=Object.assign({},this.carAddForm.value)
      this.carModel.userId=11
      this.carService.add(this.carModel);
     
    }
  }
}
