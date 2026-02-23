import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Menu } from './menu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'postgres',
      entities: [Menu],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Menu]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
