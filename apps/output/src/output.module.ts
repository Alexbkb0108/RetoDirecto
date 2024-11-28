import { Module } from '@nestjs/common';
import { OutputService } from './output.service';
import { OutputController } from './output.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Las variables estarán disponibles globalmente
      envFilePath: '.env',  // La ruta al archivo .env
    }),
  ],
  controllers: [OutputController],
  providers: [OutputService],
})
export class OutputModule {}
