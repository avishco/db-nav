import { DbTypes } from './navigator/db-types';
import { DbRole } from './navigator/db-role';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDbEntity } from './navigator/i-db-entity';
import { CONNECTION_MOCKS, DB_MOCKS, SCHEMA_MOCKS } from './mocks';

@Injectable({
  providedIn: 'root'
})
export class DbApiMockService {

  getEntites(type: DbTypes, parentId?: number, page?: number, count?: number): Observable<IDbEntity[]> {
    let entities
    switch(type) {
      case DbTypes.Database: {
        entities = this.getDbs(parentId);
        break;
      }
      case DbTypes.Schema: {
        entities = this.getSchemes(parentId);
        break;
      }
      default: entities = this.getConnections()
    }
    return entities;
  }

  getConnections(): Observable<IDbEntity[]> {
    return of(CONNECTION_MOCKS)
  }

  getDbs(connectionId?: number): Observable<IDbEntity[]> {
    const dbs = DB_MOCKS;
    return connectionId
    ? of(dbs.filter(db => +db.path.split('/')[0] === connectionId))
    : of(dbs)
  }

  getSchemes(dbId?: number): Observable<IDbEntity[]> {
    const schemes = SCHEMA_MOCKS;
    return dbId
    ? of(schemes.filter(schema => +schema.path.split('/')[1] === dbId))
    : of(schemes)
  }

  constructor() { }
}
