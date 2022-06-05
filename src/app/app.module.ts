import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarmodelComponent } from './carmodel/carmodel.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CarModelDetailComponent } from './carmodel/carModelDetail/carModelDetail.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { AddComponent } from './carmodel/add/add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import 'hammerjs';
import{FileUploadModule} from 'ng2-file-upload'

@NgModule({
  declarations: [					
    AppComponent,
      NavComponent,
      CarmodelComponent,
      CarModelDetailComponent,
      AddComponent,
      PhotoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxGalleryModule,
    FileUploadModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
