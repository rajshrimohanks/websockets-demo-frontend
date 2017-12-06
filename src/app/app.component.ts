import { Component } from '@angular/core';
import { WebsocketService, ChatService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message: string;

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
    this.message = '';
  }

  sendMsg() {
    if (!this.message) {
      this.message = '';
    }
    console.log('new message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
  }

  sendBroadcastMsg() {
    if (!this.message) {
      this.message = '';
    }
    this.message = 'broadcast:' + this.message;
    console.log('new broadcast message from client to websocket: ', this.message);
    this.chatService.messages.next(this.message);
  }
}
