import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMenuDto } from './create-menu.dto';
import { CreateRoleDto } from './create-role.dto';
import { UpdateRoleDto } from './update-role.dto';
import { Menu } from './menu.entity';
import { Role } from './role.entity';
import { RolePaginationDto } from './role-pagination.dto';

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

  @Get('roles/list')
  async getRoleList(
    @Query() rolePaginationDto: RolePaginationDto,
  ): Promise<{ data: Role[]; total: number }> {
    return this.appService.getRoleList(rolePaginationDto);
  }

  @Post('roles/add')
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<string> {
    return this.appService.createRole(createRoleDto);
  }

  @Delete('roles/delete/:id')
  async deleteRole(@Param('id') id: number): Promise<{ affected: number }> {
    return this.appService.deleteRole(id);
  }

  @Put('roles/edit/:id')
  async updateRole(
    @Param('id') id: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<{ affected: number }> {
    return this.appService.updateRole(id, updateRoleDto);
  }
}
