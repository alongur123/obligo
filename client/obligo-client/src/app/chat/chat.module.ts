import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './containers/chat/chat.component';
import { RoomComponent } from './components/room/room.component';
import {HomeComponent} from './containers/home/home.component';
import {MessageComponent} from './components/message/message.component';
import { ChatRoutes } from './chat.routing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ChatComponent,
    HomeComponent,
    RoomComponent,
    MessageComponent
  ],
  exports: [
    ChatComponent,
    HomeComponent,
    RoomComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutes,
    HttpClientModule,    
    MatCardModule
  ]
})
export class ChatModule { }
