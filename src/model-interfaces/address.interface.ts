import { Field, InterfaceType } from '@nestjs/graphql';
import { IsDefined, IsOptional, IsString } from 'class-validator';

@InterfaceType()
export abstract class IAddress {
  @Field()
  @IsString()
  @IsDefined()
  line1: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  line2?: string;

  @Field()
  @IsString()
  @IsDefined()
  city: string;

  @Field()
  state: string;

  @Field()
  @IsString()
  @IsDefined()
  countryCode: string;

  @Field()
  @IsString()
  @IsDefined()
  postCode: string;
}
