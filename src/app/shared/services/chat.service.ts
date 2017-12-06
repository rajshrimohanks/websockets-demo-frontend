import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ChatService {
  public messages: Subject<string>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<string>>wsService
      .connect(environment.url)
      .map((response: MessageEvent): string => {
        return response.data;
      });
  }
}
