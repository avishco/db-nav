import { NavigatorModule } from './navigator/navigator.module';
import { TreeModule } from './tree/tree.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavigatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
