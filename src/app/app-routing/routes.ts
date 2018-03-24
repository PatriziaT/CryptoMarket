import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MarketComponent } from '../market/market.component';
import { NewsComponent } from '../news/news.component';
import { ForumComponent } from '../forum/forum.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'market', component: MarketComponent},
    { path: 'news', component: NewsComponent},
    { path: 'forum', component: ForumComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
]