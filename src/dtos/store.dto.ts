import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AddressDto } from './address.dto';

@ObjectType('Store')
export class StoreDto {
  @Field(() => Int)
  id: number;

  @Field()
  slug: string;

  @Field()
  name: string;

  @Field()
  address: AddressDto;
}
