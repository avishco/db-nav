import { TreeService } from './../tree.service';
import { ITreeOptions } from './../types/i-tree-options';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { ITreeNode } from '../types/i-tree-node';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit, OnDestroy{

  termination: Subject<undefined> = new Subject();
  terminate$: Observable<undefined> = this.termination.asObservable();

  @Input()
  options!: ITreeOptions

  @Input()
  treeNodeLabelTemplate?: TemplateRef<any>;

  // In real world examples we would have to verify the data.
  @Input()
  data!: any

  @Output()
  loadChildren: EventEmitter<ITreeNode> = new EventEmitter()

  constructor(
    private tree: TreeService
  ) { }

  ngOnInit(): void {
    if (this.treeNodeLabelTemplate) {
      this.tree.setTemplates(this.treeNodeLabelTemplate)
    }
    this.tree.setOptions(this.options)
    this.initTreeLazyloading()
  }

  initTreeLazyloading() {
    this.tree.loadNodechildrenData$.pipe(
      takeUntil(this.terminate$)
    ).subscribe(
      node => this.loadChildren.emit(node)
    )
  }

  trackBy(index: number, name: ITreeNode): number {
    return name.id;
  }

  ngOnDestroy(): void {
    this.termination.next();
    this.termination.complete();
  }

}
