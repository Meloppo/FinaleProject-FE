import { NgModule } from '@angular/core';
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




@NgModule({
  declarations: [				
    AppComponent,
      NavComponent,
      CarmodelComponent,
      CarModelDetailComponent,
      AddComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
