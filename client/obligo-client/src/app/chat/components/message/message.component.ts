import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  @Input() message: Message;
   currentName: string;

  ngOnInit() {
    this.currentName = this.chatService.currentName;
  }

}
