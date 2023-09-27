import { Module } from '@nestjs/common';
import { ScarfsService } from './scarfs.service';
import { ScarfsController } from './scarfs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Scarf, ScarfSchema } from './schemas/scarf.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Scarf.name, schema: ScarfSchema }])],
  controllers: [ScarfsController],
  providers: [ScarfsService],
})
export class ScarfsModule {}
