import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { StoreDto } from 'src/dtos/store.dto';
import { StoreEntity } from 'src/entities/store.entity';
import { StoreService } from './store.service';

@Resolver(() => StoreDto)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => StoreDto)
  async store(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<StoreEntity | undefined> {
    return this.storeService.findById(id);
  }
}
