import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService, private route: ActivatedRoute) { }

  messages$: Observable<Array<string>>;
  roomName;
  ngOnInit() {
    this.messages$ = this.chatService.messages$;
    this.route.params.subscribe(x=> {      
      this.roomName = x["room"];
    })
  }

}
