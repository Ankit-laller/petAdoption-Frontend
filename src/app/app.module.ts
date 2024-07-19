import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedPages/navbar/navbar.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CategoryComponent } from './pages/category/category.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModalComponent } from './pages/notification-modal/notification-modal.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';
import { AdoptionFormComponent } from './pages/adoption-form/adoption-form.component';
import { ImageurlSanitizerPipe } from './pipes/imageurl-sanitizer.pipe';

@NgModule({
  declarations: [	
   AppComponent,
   NavbarComponent,
   FooterComponent,
   ListViewComponent,
   HomeComponent,
   LoginComponent,
   RegisterComponent,
   ProductDetailComponent,
   LayoutComponent,
   CategoryComponent,
   NotificationModalComponent,
   AdoptionComponent,
   AdoptionFormComponent,
   ImageurlSanitizerPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  InputTextModule,
  PasswordModule,
  NoopAnimationsModule,
  
  
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
