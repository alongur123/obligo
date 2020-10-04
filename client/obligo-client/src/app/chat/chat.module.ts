import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './containers/chat/chat.component';
import {MessageComponent} from './components/message/message.component';
import { ChatRoutes } from './chat.routing';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
  ],
  exports: [
    ChatComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutes,
    HttpClientModule,    
    MatCardModule,
    MatButtonModule,
  ]
})
export class ChatModule { }
