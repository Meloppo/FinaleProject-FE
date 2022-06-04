import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/models/carModel';
import { CarService } from 'src/app/services/car.service';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
} from '@kolkov/ngx-gallery';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-carModelDetail',
  templateUrl: './carModelDetail.component.html',
  styleUrls: ['./carModelDetail.component.css'],
  providers: [CarService],
})
export class CarModelDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {}

  carModel!: CarModel
  photos: Photo[] = []
  galleryOptions: NgxGalleryOptions[]=[]
  galleryImages: NgxGalleryImage[] =[]

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarModelById(params['carModelId']);
    });
  }

  getCarModelById(carModelId: number) {
    this.carService.getCarModelById(carModelId).subscribe((data) => {
      this.carModel = data;
      this.getPhotosByCarModel(carModelId);
    });
  }

  getPhotosByCarModel(carModelId: number) {
    this.carService.getPhotosByCarModel(carModelId).subscribe((data) => {
      this.photos = data;
      this.buildGallery;
    });
  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.photos.length; i++) {
      imageUrls.push({
        small: this.carModel.photoUrl[i].url,
        medium: this.carModel.photoUrl[i].url,
        big: this.carModel.photoUrl[i].url,
      });
    }

    return imageUrls;
  }

  buildGallery() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },

      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },

      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = this.getImages();
  }
}
