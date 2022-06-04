import { CarmodelComponent } from "./carmodel/carmodel.component";
import { Routes } from "@angular/router";
import { CarModelDetailComponent } from "./carmodel/carModelDetail/carModelDetail.component";
import { AddComponent } from "./carmodel/add/add.component";
export const appRoutes:Routes =[
{path:"carModel", component: CarmodelComponent},
{path:"carModelDetail/:carModelId", component: CarModelDetailComponent},
{path:"add", component: AddComponent},
{path:"**", redirectTo:"carModel", pathMatch:"full"}
]

