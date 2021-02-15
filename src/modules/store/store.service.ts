import { Injectable } from '@nestjs/common';
import { StoreEntity } from 'src/entities/store.entity';

@Injectable()
export class StoreService {
  constructor() {}

  async findById(id: number): Promise<StoreEntity> {
    return Object.assign({}, new StoreEntity(), { id });
  }
}
