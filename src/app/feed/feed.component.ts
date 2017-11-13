import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chat-message.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedComponent implements OnInit, OnChanges {

  feed: FirebaseListObservable<ChatMessage[]>;
  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }
}
