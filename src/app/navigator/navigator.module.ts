import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator.component';
import { TreeModule } from '../tree/tree.module';



@NgModule({
  declarations: [
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    TreeModule
  ],
  exports: [
    NavigatorComponent
  ]
})
export class NavigatorModule { }
