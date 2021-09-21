import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

const environment = process.env.ENVIRONMENT ?? "develop"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `../.env.${environment}`
    })
  ],
})
export class AppModule {}
