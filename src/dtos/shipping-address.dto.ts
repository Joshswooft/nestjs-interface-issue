import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { IAddress } from '../model-interfaces/address.interface';

@ObjectType({ implements: IAddress })
export class ShippingAddress extends IAddress {
  @Field()
  @IsString()
  recipientName: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  deliveryInstructions?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  phoneNumber?: string;
}
