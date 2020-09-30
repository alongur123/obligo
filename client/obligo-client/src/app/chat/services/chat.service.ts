import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messagesSubject = new BehaviorSubject(["alon", "bla", "bka"]);

  private roomsSubject = new BehaviorSubject(["alon", "bla", "bka"]);

  public get messages$() {
    return this.messagesSubject.asObservable();
  }

  public get rooms$() {
    return this.roomsSubject.asObservable();
  }

  constructor(private http: HttpClient) {
    // this.http.get<Array<string>>('/api/messages').subscribe(value => {
    //   this.messages.next(value);
    // });
  }
}
