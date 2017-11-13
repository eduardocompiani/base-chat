import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    ) {
      // this.afAuth.authState.subscribe( auth => {
      //   if (auth !== undefined && auth !== null) {
      //     this.user = auth;
      //   }
      // });
    }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    // const email = this.user.email;
    const email = "teste@email.com";
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      // userName: this.userName,
      userName: "test-user",
      email: email
    });

    console.log(timestamp);
  }

  getTimeStamp() {
    const now = new Date();
    const date =  now.getUTCFullYear() + '/' + 
                  (now .getUTCMonth() + 1) + '/' +
                  now.getUTCDay();

    const time =  now.getUTCHours() + ':' + 
                  now .getUTCMinutes() + ':' +
                  now.getUTCSeconds();
    
    return (date + ' ' + time);
  }

  getMessages(): FirebaseListObservable<ChatMessage[]> {
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    });
  }
}
