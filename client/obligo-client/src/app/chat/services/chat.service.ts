import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../models/message';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messagesSubject = new BehaviorSubject([]);

  public currentName: string;

  public get messages$() {
    return this.messagesSubject.pipe(map(messages => {
      messages.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
      return messages;
    }));
  }

  public addToMessage(text) {
    this.socket.emit('sendMessage', {text, userName: this.currentName});
  }

  constructor(private http: HttpClient, private socket: Socket) {
    // this.http.get<Array<string>>('/api/messages').subscribe(value => {
    //   this.messages.next(value);
    // });
    this.socket.on('gotMessage', (textObj) => {      
      this.messagesSubject.next([...this.messagesSubject.value, new Message(textObj.text, new Date(),textObj.userName)])
    });
    this.socket.on('getName', (name) => {
      this.currentName = name;
    });
  }
}
