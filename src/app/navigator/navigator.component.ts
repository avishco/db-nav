import { ITreeNode } from './../tree/types/i-tree-node';
import { NavigatorService } from './navigator.service';
import { IDbEntity } from './i-db-entity';
import { DbRole } from './db-role';
import { Component, OnInit } from '@angular/core';
import { ITreeOptions } from '../tree/types/i-tree-options';
import { Observable } from 'rxjs';

@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit{

  connections$!: Observable<IDbEntity[]>

  userPermissionLevel: DbRole = DbRole.Admin

  constructor(
    private navigator: NavigatorService
  ) {}

  ngOnInit() {
    this.connections$ = this.navigator.dbState$
  }

  getDisabledFn() {
    const userPermission = this.userPermissionLevel;
    return (entity: any) => {
      return userPermission < entity.permissionLevel
    }
  }

  getEntityChildren(entity: IDbEntity | ITreeNode) {
    this.navigator.getEntityChildren(entity as IDbEntity)
  }

  options: ITreeOptions = {
    disabledNodeFn: this.getDisabledFn()
  }
}
