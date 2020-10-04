import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  messages$: Observable<Array<Message>>;
  currentName: string;

  ngOnInit() {
    this.messages$ = this.chatService.messages$;    
  }

  sendMessage(text){
    this.chatService.addToMessage(text);
    text = '';
  }

}
