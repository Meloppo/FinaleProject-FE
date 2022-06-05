import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AlertifyService } from '../services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../models/photo';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private alertify:AlertifyService, 
    private activatedRoute:ActivatedRoute) { }


photos:Photo[]=[]
uploader!:FileUploader
hasBaseDropZoneOver=false;
baseUrl='http://localhost:44305/api/'
currentMain:Photo = {}
currentCar:any

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.currentCar=params["carModelId"]
    })
    this.initializeUploader()
  }

initializeUploader(){
  this.uploader=new FileUploader({
  url:this.baseUrl+'carModels/'+this.currentCar+'/photos',
  isHTML5:true,
  allowedFileType:['image'],
  autoUpload:false,
  removeAfterUpload:true,
  
})
 this.uploader.onSuccessItem= (item,response,status,headers)=>{
   if(response){
     var res:Photo=JSON.parse(response)
     var photo={
       id:res.id,
       url:res.url,
       dateAdded:res.dateAdded,
       description: res.description,
       isMain: res.isMain,
       carModelId:res.carModelId
     }
     this.photos.push(photo)
   }
 }
}

}
