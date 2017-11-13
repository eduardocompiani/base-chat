import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  
  constructor() { }

  ngOnInit(ChatMessage = this.chatMessage) {
    this.messageContent = ChatMessage.message;
    this.timeStamp = ChatMessage.timeSent;
    this.userName = ChatMessage.userName;
    this.userEmail = ChatMessage.email;
  }

}
