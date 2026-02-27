import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { CreateMenuDto } from './create-menu.dto';
import { CreateRoleDto } from './create-role.dto';
import { UpdateRoleDto } from './update-role.dto';
import { Menu } from './menu.entity';
import { Role } from './role.entity';
import { RolePaginationDto } from './role-pagination.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
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
    return await this.menuRepository.find();
  }

  async getRoleList(
    rolePaginationDto: RolePaginationDto,
  ): Promise<{ data: Role[]; total: number }> {
    const { pageNo = 1, pageSize = 10, name, code } = rolePaginationDto;

    const where: FindOptionsWhere<Role> = {};
    if (name) {
      where.name = Like(`%${name}%`);
    }
    if (code) {
      where.code = Like(`%${code}%`);
    }

    const [list, total] = await this.roleRepository.findAndCount({
      where,
      order: { id: 'ASC' },
      skip: (pageNo - 1) * pageSize,
      take: pageSize,
    });
    return { data: list, total };
  }

  async createRole(createRoleDto: CreateRoleDto): Promise<string> {
    const role = this.roleRepository.create(createRoleDto);
    await this.roleRepository.save(role);
    return `Role "${createRoleDto.name}" created successfully`;
  }

  async deleteRole(id: number): Promise<{ affected: number }> {
    const result = await this.roleRepository.delete(id);
    return { affected: result.affected ?? 0 };
  }

  async updateRole(
    id: number,
    updateRoleDto: UpdateRoleDto,
  ): Promise<{ affected: number }> {
    const result = await this.roleRepository.update(id, updateRoleDto);
    return { affected: result.affected ?? 0 };
  }
}
