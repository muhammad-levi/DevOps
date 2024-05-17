import { Module } from '@nestjs/common';
import { MathModule } from './math/math.module';
import { PrometheusModule } from "@willsoto/nestjs-prometheus";

@Module({
  imports: [MathModule, PrometheusModule.register()],
})
export class AppModule {}
