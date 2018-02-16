import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }        from './app.home';
import {FeedbackComponent}        from './app.feedback';
import { PageDefault }           from './app.pagedefault';
import {  MyRemoteService } from './app.myremoteservice';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component:  FeedbackComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
