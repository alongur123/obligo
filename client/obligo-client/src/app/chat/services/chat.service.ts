import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messagesSubject = new BehaviorSubject([new Message("aaa", new Date(), true)
    , new Message("bbb", new Date(), true)
    , new Message("ccc", new Date(), true),
    new Message("aaa", new Date(), false)]);

  private roomsSubject = new BehaviorSubject(["alon", "bla", "bka"]);

  public get messages$() {
    return this.messagesSubject.asObservable();
  }

  public get rooms$() {
    return this.roomsSubject.asObservable();
  }

  public addToMessage(text){
    this.messagesSubject.next([...this.messagesSubject.value,new Message(text, new Date(), true) ])
  }

  constructor(private http: HttpClient) {
    // this.http.get<Array<string>>('/api/messages').subscribe(value => {
    //   this.messages.next(value);
    // });
  }
}
