import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ITreeNode } from './types/i-tree-node';
import { ITreeOptions } from './types/i-tree-options';
import { ITreeState } from './types/i-tree-state';

const TREE_INITIAL: ITreeState = {
  openNodesIds: [],
  nodes: []
}

const DefaultTreeOptions: ITreeOptions = {
  disabledNodeFn: () => false
}

@Injectable()
export class TreeService {

  private treenodeLoadingStream: Subject<ITreeNode> = new Subject<ITreeNode>()
  loadNodechildrenData$: Observable<ITreeNode> = this.treenodeLoadingStream.asObservable();

  private treeStateSubject: BehaviorSubject<ITreeState> = new BehaviorSubject(TREE_INITIAL);
  public readonly treeState$: Observable<ITreeState> = this.treeStateSubject.asObservable()
  public readonly openNodes$: Observable<number[]> = this.treeState$.pipe(
    distinctUntilChanged(),
    map(s => s.openNodesIds)
  )
  options: ITreeOptions = DefaultTreeOptions;
  treeNodeLabelTemplate: TemplateRef<any> | undefined;


  get treeStateValue(): ITreeState {
    return this.treeStateSubject.value;
  }

  get openTreeNodeIds(): number[] {
    return this.treeStateValue.openNodesIds
  }

  constructor() { }

  setOptions(options: ITreeOptions) {
    this.options = options;
  }

  setTemplates(treeNodeLabelTemplate: TemplateRef<any>) {
    this.treeNodeLabelTemplate = treeNodeLabelTemplate;
  }

  openNode(node: ITreeNode) {
    if (this.isNodeOpened(node)) {
      return;
    }
    const openNodesIds = [...this.openTreeNodeIds, node.id];
    this.setState({
      ...this.treeStateValue,
      openNodesIds
    })
  }

  closeNode(node: ITreeNode) {
    const openNodesIds = this.openTreeNodeIds.filter(nId => nId !== node.id)
    this.setState({
      ...this.treeStateValue,
      openNodesIds
    })
  }

  isNodeOpened(node: ITreeNode) {
    return this.openTreeNodeIds.includes(node.id)
  }

  getNodeChildren(node: ITreeNode) {
    this.treenodeLoadingStream.next(node)
  }

  private setState(newState: ITreeState) {
    this.treeStateSubject.next(newState);
  }

}
