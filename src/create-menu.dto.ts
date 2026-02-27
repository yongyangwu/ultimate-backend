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
  @IsOptional()
  component?: string;

  @IsString()
  @IsOptional()
  path?: string;

  @IsString()
  @IsOptional()
  redirect?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsBoolean()
  @IsOptional()
  isHide?: boolean;

  @IsBoolean()
  @IsOptional()
  isAffix?: boolean;

  @IsBoolean()
  @IsOptional()
  isFull?: boolean;

  @IsBoolean()
  @IsOptional()
  isKeepAlive?: boolean;

  @IsString()
  @IsOptional()
  permissonCode?: string;

  @IsInt()
  @IsOptional()
  order?: number;
}
