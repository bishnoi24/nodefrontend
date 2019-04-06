import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutusComponent } from './aboutus/aboutus.component';
//import { TypingAnimationDirective } from 'angular-typing-animation'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProjectsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  //TypingAnimationDirective: [AppComponent]
})
export class AppModule { }
