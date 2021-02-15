import { ObjectType } from '@nestjs/graphql';
import { IAddress } from '../model-interfaces/address.interface';

@ObjectType({
  implements: IAddress,
})
export class AddressDto extends IAddress {}
