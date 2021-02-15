import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ShippingAddressEmbedded } from './shipping-address.embedded';

@Entity('stores')
export class StoreEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column(() => ShippingAddressEmbedded)
  shippingAddress: ShippingAddressEmbedded;
}
