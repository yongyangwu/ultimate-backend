import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMenuDto } from './create-menu.dto';
import { Menu } from './menu.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('menu/add')
  async createMenu(@Body() createMenuDto: CreateMenuDto): Promise<string> {
    console.log('Received createMenuDto:', JSON.stringify(createMenuDto));
    return this.appService.createMenu(createMenuDto);
  }

  @Get('menu/list')
  async getMenuList(): Promise<Menu[]> {
    return this.appService.getMenuList();
  }
}
