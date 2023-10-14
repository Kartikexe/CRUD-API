import {Entity, model, property} from '@loopback/repository';

@model()
export class Mongo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  pname: string;

  @property({
    type: 'string',
    required: true,
  })
  ptype: string;


  constructor(data?: Partial<Mongo>) {
    super(data);
  }
}

export interface MongoRelations {
  // describe navigational properties here
}

export type MongoWithRelations = Mongo & MongoRelations;
