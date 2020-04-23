import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { StringInterpolationDemoComponent } from './string-interpolation-demo/string-interpolation-demo.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo.component';
import { TwoWayBindindDemoComponent } from './two-way-bindind-demo/two-way-bindind-demo.component';
import { TemplateBindingDemoComponent } from './template-binding-demo/template-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationDemoComponent,
    EventBindingDemoComponent,
    PropertyBindingDemoComponent,
    TwoWayBindindDemoComponent,
    TemplateBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
