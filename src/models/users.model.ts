import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Users extends Entity {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
