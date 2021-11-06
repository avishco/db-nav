import { IDbEntity } from './navigator/i-db-entity';
import { DbRole } from "./navigator/db-role"
import { DbTypes } from "./navigator/db-types"

export const CONNECTION_MOCKS: IDbEntity[] = [
  {name: 'con-1', type: DbTypes.Connection, id: 1, path: '', permissionLevel: DbRole.User},
  {name: 'con-2', type: DbTypes.Connection, id: 2, path: '', permissionLevel: DbRole.User},
  {name: 'con-3', type: DbTypes.Connection, id: 3, path: '', permissionLevel: DbRole.User},
];


export const DB_MOCKS: IDbEntity[] = [
  {name: 'db-11', type: DbTypes.Database, id: 11, path: '1', permissionLevel: DbRole.User},
  {name: 'db-12', type: DbTypes.Database, id: 12, path: '1', permissionLevel: DbRole.User},
  {name: 'db-13', type: DbTypes.Database, id: 13, path: '1', permissionLevel: DbRole.User},
  {name: 'db-14', type: DbTypes.Database, id: 14, path: '2', permissionLevel: DbRole.Admin},
  {name: 'db-15', type: DbTypes.Database, id: 15, path: '2', permissionLevel: DbRole.User},
  {name: 'db-16', type: DbTypes.Database, id: 16, path: '3', permissionLevel: DbRole.User},
  {name: 'db-17', type: DbTypes.Database, id: 17, path: '3', permissionLevel: DbRole.User},
  {name: 'db-18', type: DbTypes.Database, id: 18, path: '3', permissionLevel: DbRole.User},
  {name: 'db-19', type: DbTypes.Database, id: 19, path: '3', permissionLevel: DbRole.Admin},
];


export const SCHEMA_MOCKS: IDbEntity[] = [
  {name: 'schema-101', type: DbTypes.Schema, id: 101,  path: '1/11', permissionLevel: DbRole.User},
  {name: 'schema-102', type: DbTypes.Schema, id: 102,  path: '1/12', permissionLevel: DbRole.User},
  {name: 'schema-103', type: DbTypes.Schema, id: 103,  path: '1/13', permissionLevel: DbRole.User},
  {name: 'schema-104', type: DbTypes.Schema, id: 104,  path: '2/14', permissionLevel: DbRole.Admin},
  {name: 'schema-105', type: DbTypes.Schema, id: 105,  path: '2/15', permissionLevel: DbRole.User},
  {name: 'schema-106', type: DbTypes.Schema, id: 106,  path: '3/16', permissionLevel: DbRole.User},
  {name: 'schema-107', type: DbTypes.Schema, id: 107,  path: '3/17', permissionLevel: DbRole.User},
  {name: 'schema-108', type: DbTypes.Schema, id: 108,  path: '3/18', permissionLevel: DbRole.User},
  {name: 'schema-109', type: DbTypes.Schema, id: 109,  path: '3/19', permissionLevel: DbRole.Admin},
  {name: 'schema-111', type: DbTypes.Schema, id: 111, path: '1/11', permissionLevel: DbRole.User},
  {name: 'schema-112', type: DbTypes.Schema, id: 112, path: '3/19', permissionLevel: DbRole.User},
  {name: 'schema-113', type: DbTypes.Schema, id: 113, path: '2/14', permissionLevel: DbRole.User},
  {name: 'schema-114', type: DbTypes.Schema, id: 114, path: '1/12', permissionLevel: DbRole.Admin},
  {name: 'schema-115', type: DbTypes.Schema, id: 115, path: '1/13', permissionLevel: DbRole.User},
  {name: 'schema-116', type: DbTypes.Schema, id: 116, path: '2/15', permissionLevel: DbRole.User},
  {name: 'schema-117', type: DbTypes.Schema, id: 117, path: '3/17', permissionLevel: DbRole.User},
  {name: 'schema-118', type: DbTypes.Schema, id: 118, path: '3/18', permissionLevel: DbRole.User},
  {name: 'schema-119', type: DbTypes.Schema, id: 119, path: '3/19', permissionLevel: DbRole.User},
];
