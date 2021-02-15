import { Column } from 'typeorm';
import { IAddress } from './address.embeded';

export interface IShippingAddress extends IAddress {
  id?: number;
  recipientName: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  countryCode: string;
  postCode: string;
  deliveryInstructions?: string;
  phoneNumber?: string;
}

export class ShippingAddressEmbedded implements IShippingAddress {
  @Column()
  recipientName: string;

  @Column()
  line1: string;

  @Column({ nullable: true })
  line2?: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  postCode: string;

  @Column()
  countryCode: string;

  @Column({ nullable: true })
  deliveryInstructions?: string;

  @Column({ nullable: true })
  phoneNumber?: string;
}
