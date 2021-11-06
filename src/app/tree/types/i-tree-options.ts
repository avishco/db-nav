import { ITreeNode } from "./i-tree-node";

export interface ITreeOptions {
  disabledNodeFn: (node: ITreeNode) => boolean;
  getChildren?: (node: ITreeNode) => any;
}
