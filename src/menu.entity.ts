import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  menuType: number;

  @Column({ nullable: true })
  parentId: number;

  @Column({ nullable: true })
  parentName: string;

  @Column()
  menuNameZh: string;

  @Column()
  menuNameEn: string;

  @Column({ nullable: true })
  component: string;

  @Column({ nullable: true })
  path: string;

  @Column({ nullable: true })
  redirect: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  icon: string;

  @Column({ default: false })
  isHide: boolean;

  @Column({ default: false })
  isFull: boolean;

  @Column({ default: false })
  isAffix: boolean;

  @Column({ default: false })
  isKeepAlive: boolean;

  @Column({ nullable: true })
  permissonCode: string;

  @Column({ default: 0 })
  order: number;
}
