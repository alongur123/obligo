import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './containers/chat/chat.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room/:room', component: ChatComponent },
];

export const ChatRoutes = RouterModule.forChild(routes);
