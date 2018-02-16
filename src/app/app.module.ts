import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageDefault }    from './app.pagedefault';
import { HomeComponent } from './app.home';
import { FeedbackComponent } from './app.feedback';
import { routing }        from './app.routing';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PageDefault,
    HomeComponent, FeedbackComponent
  ],
  imports: [
    BrowserModule, routing,FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
