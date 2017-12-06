import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

// const CHAT_URL = 'ws://echo.websocket.org/';
const CHAT_URL = 'ws://localhost:8999/';

@Injectable()
export class ChatService {
  public messages: Subject<string>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<string>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): string => {
        return response.data;
      });
  }
}
