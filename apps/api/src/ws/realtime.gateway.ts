
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({ namespace: "/realtime", cors: { origin: "*" } })
export class RealtimeGateway {
  @WebSocketServer() server!: Server;

  @SubscribeMessage("ping")
  handlePing(@MessageBody() data: any) {
    return { event: "pong", data };
  }

  // Example broadcast: server.emit("traffic:update", { segment_id: 1, speed_kmh: 42 });
}
