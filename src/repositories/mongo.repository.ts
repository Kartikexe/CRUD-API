import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Mongo, MongoRelations} from '../models';

export class MongoRepository extends DefaultCrudRepository<
  Mongo,
  typeof Mongo.prototype.id,
  MongoRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Mongo, dataSource);
  }
}
