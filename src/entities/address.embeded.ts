import { Column } from 'typeorm';

export interface IAddress {
  line1: string;

  line2?: string;

  city: string;

  state: string;

  countryCode: string;

  postCode: string;
}

export class AddressEmbedded implements IAddress {
  @Column()
  line1: string;

  @Column({ nullable: true })
  line2?: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  state: string;

  @Column({ length: 3 })
  countryCode: string;

  @Column({ length: 10 })
  postCode: string;
}
