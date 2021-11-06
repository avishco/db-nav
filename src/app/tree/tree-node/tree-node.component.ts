import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TreeService } from '../tree.service';
import { ITreeNode } from '../types/i-tree-node';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {

  @Input()
  node!: ITreeNode;

  get isOpen(): boolean {
    return this.tree.isNodeOpened(this.node)
  }

  get isLocked(): boolean {
    return this.tree.options.disabledNodeFn.bind(this, this.node)()
  }

  treeNodeLabelTemplate?: TemplateRef<any>;

  constructor(
    private tree: TreeService
  ) { }

  trackBy(index: number, name: ITreeNode): number {
    return name.id;
  }

  ngOnInit(): void {
    this.treeNodeLabelTemplate = this.tree.treeNodeLabelTemplate;
  }

  toggleNode() {
    if (this.isOpen) {
      this.tree.closeNode(this.node)
    }
    else {
      if (!this.node.children || !this.node.children.length) {
        this.getNodeChildren();
      }
      this.tree.openNode(this.node)
    }
  }

  getNodeChildren() {
    this.tree.getNodeChildren(this.node)
  }

}
