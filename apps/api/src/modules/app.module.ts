
import { Module } from "@nestjs/common";
import { HealthController } from "../routes/health.controller";
import { IncidentsController } from "../routes/incidents.controller";
import { RealtimeGateway } from "../ws/realtime.gateway";

@Module({
  imports: [],
  controllers: [HealthController, IncidentsController],
  providers: [RealtimeGateway],
})
export class AppModule {}
