import { TreeService } from './tree.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';



@NgModule({
  declarations: [
    TreeComponent,
    TreeNodeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TreeComponent,
    TreeNodeComponent,
  ],
  providers: [
    TreeService
  ]
})
export class TreeModule { }
