import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  rooms$: Observable<Array<string>>;
  ngOnInit() {
    this.rooms$ = this.chatService.rooms$;
  }

}
