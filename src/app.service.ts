import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './create-menu.dto';
import { Menu } from './menu.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createMenu(createMenuDto: CreateMenuDto): Promise<string> {
    const menu = this.menuRepository.create(createMenuDto);
    await this.menuRepository.save(menu);
    console.log('Menu created and saved:', menu);
    return `Menu "${createMenuDto.menuNameZh}" created successfully`;
  }

  async getMenuList(): Promise<Menu[]> {
    return this.menuRepository.find();
  }
}
