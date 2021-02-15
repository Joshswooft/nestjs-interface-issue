import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ShippingAddress } from './shipping-address.dto';

@ObjectType('Store')
export class StoreDto {
  @Field(() => Int)
  id: number;

  @Field()
  slug: string;

  @Field()
  name: string;

  @Field()
  shippingAddress: ShippingAddress;
}
