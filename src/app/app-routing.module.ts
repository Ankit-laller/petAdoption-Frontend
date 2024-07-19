import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { pathToFileURL } from 'url';
import { SplashComponent } from './pages/splash/splash.component';
import { CategoryComponent } from './pages/category/category.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { NotificationModalComponent } from './pages/notification-modal/notification-modal.component';
import { AdoptionComponent } from './pages/adoption/adoption.component';
import { AdoptionFormComponent } from './pages/adoption-form/adoption-form.component';

const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"productdetail", component:ProductDetailComponent},
  {path:"splash", component:SplashComponent},
  {path:"notification", component:NotificationModalComponent},
  {path:"", redirectTo:"splash",pathMatch:'full' },
  {path:"", component:LayoutComponent, children:[
    {path:"home", component:HomeComponent},
    {path:"petdetail", component:ProductDetailComponent},
    {path:"category",component:CategoryComponent},
    {path:"adoption", component:AdoptionComponent},
    {path:"adoption-form",component:AdoptionFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
