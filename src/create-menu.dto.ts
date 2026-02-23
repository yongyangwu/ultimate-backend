import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateMenuDto {
  @IsInt()
  @IsNotEmpty()
  menuType: number;

  @ValidateIf((o: CreateMenuDto) => Number(o.menuType) !== 1)
  @IsInt()
  @IsNotEmpty()
  parentId: number;

  @IsString()
  @IsOptional()
  parentName?: string;

  @IsString()
  @IsNotEmpty()
  menuNameZh: string;

  @IsString()
  @IsNotEmpty()
  menuNameEn: string;

  @IsString()
  @IsNotEmpty()
  routePath: string;

  @IsBoolean()
  @IsNotEmpty()
  isHide: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isKeepAlive: boolean;
}
