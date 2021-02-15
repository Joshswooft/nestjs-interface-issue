import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEmbedded } from './address.embeded';

@Entity('stores')
export class StoreEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column(() => AddressEmbedded)
  address: AddressEmbedded;
}
