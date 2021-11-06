import { ITreeNode } from "./i-tree-node";

export interface ITreeState {
  openNodesIds: number[];
  nodes: ITreeNode[];
}
