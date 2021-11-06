import { DbTypes } from './db-types';
import { DbRole } from './db-role';

export interface IDbEntity {
  id: number;
  name: string;
  type: DbTypes
  path: string;
  children?: IDbEntity[];
  permissionLevel: DbRole
}
