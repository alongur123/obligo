import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './containers/chat/chat.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
];

export const ChatRoutes = RouterModule.forChild(routes);
