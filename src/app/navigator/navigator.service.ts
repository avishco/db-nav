import { DbApiMockService } from './../db-api-mock.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDbEntity } from './i-db-entity';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  private dbStateSubject: BehaviorSubject<IDbEntity[]> = new BehaviorSubject([] as IDbEntity[]);
  readonly dbState$: Observable<IDbEntity[]> = this.dbStateSubject.asObservable()

  get currentDBState(): IDbEntity[] {
    return this.dbStateSubject.getValue()
  }

  constructor(
    private api: DbApiMockService
  ) {
    this.api.getConnections().pipe().subscribe(
      connections => this.dbStateSubject.next(connections)
    )
  }

  public getEntityChildren(ent: IDbEntity) {
    this.api.getEntites(ent.type + 1, ent.id)
      .pipe(
        tap(ents => console.log(ents)
        )
      )
      .subscribe(
        ents => {
          const updatedState = this.updateRootEntities(ents, this.currentDBState)
          this.dbStateSubject.next(updatedState);
        }
      )
  }

  private updateRootEntities(ents: IDbEntity[], roots: IDbEntity[]): IDbEntity[] {
    ents.forEach(ent => this.insertEntity(roots, ent, ent.path))
    console.log(roots);

    return roots
  }


  // {name: 'schema-01', type: DbTypes.Schema, id: 1,  path: '1/1', permissionLevel: DbRole.User},
  // [1, 1]
  // {name: 'con-1', type: DbTypes.Connection, id: 1, path: '', permissionLevel: DbRole.User},
  // {name: 'con-2', type: DbTypes.Connection, id: 2, path: '', permissionLevel: DbRole.User},
  // {name: 'con-3', type: DbTypes.Connection, id: 3, path: '', permissionLevel: DbRole.User},

  private insertEntity(roots: IDbEntity[], ent: IDbEntity, path: string): any {
    const innerPath = path.split('/').reverse()
    const parentId = innerPath.pop() || 0; // 1
    const parent = roots.find(root => root.id === +parentId) // { name: con-1... }

    if (!parent) {
      throw new Error(parent)
    }
    if (innerPath.length) {
      this.insertEntity(parent.children!, ent, innerPath.join('/'))
    } else {
      parent.children = parent.children ? [...parent.children, ent] : [ent]
    }
  }

}
