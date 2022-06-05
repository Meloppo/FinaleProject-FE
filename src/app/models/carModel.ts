import { Photo } from "./photo";

export class CarModel {
    id!: number;
    name?: string;
    description?:string
    userId?:number
    photos!:Photo[]
}
