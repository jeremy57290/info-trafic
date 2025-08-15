
import { Body, Controller, Get, Post } from "@nestjs/common";

type Incident = {
  id: string;
  type: string;
  description?: string;
  ts: string;
  lat: number;
  lon: number;
};

const memoryStore: Incident[] = [];

@Controller("incidents")
export class IncidentsController {
  @Get()
  list(): Incident[] {
    return memoryStore;
  }

  @Post()
  create(@Body() dto: Omit<Incident, "id" | "ts">) {
    const incident: Incident = {
      id: `inc_${Date.now()}`,
      ts: new Date().toISOString(),
      ...dto,
    };
    memoryStore.push(incident);
    return incident;
  }
}
