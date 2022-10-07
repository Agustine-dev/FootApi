import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [HttpClientModule,BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
