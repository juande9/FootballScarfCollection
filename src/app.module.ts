import { Module } from '@nestjs/common';
import { ClubsModule } from './clubs/clubs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScarfsModule } from './scarfs/scarfs.module';

@Module({
  imports: [
    ClubsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'),
      }),
      inject: [ConfigService],
    }),
    ScarfsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
