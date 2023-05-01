import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule
  ],
  exports: [
    TopbarComponent,
    HomeComponent,
  ]
})
export class CoreModule { }
