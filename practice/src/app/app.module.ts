import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { InterpolationBindingComponent } from './binding/interpolation-binding/interpolation-binding.component';
import { AttributeBindingComponent } from './binding/attribute-binding/attribute-binding.component';
import { PropertyBindingComponent } from './binding/property-binding/property-binding.component';
import { ClassStyleBindingComponent } from './binding/class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './binding/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    InterpolationBindingComponent,
    AttributeBindingComponent,
    PropertyBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }