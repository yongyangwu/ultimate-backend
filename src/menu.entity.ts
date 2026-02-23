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

  @Column()
  routePath: string;

  @Column({ default: false })
  isHide: boolean;

  @Column({ default: false })
  isKeepAlive: boolean;
}
