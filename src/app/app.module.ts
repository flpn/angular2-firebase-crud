import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBxyA21G6PIyIGustHmVeOV1PzbS8K2uIM",
    authDomain: "angular2-firebase-crud.firebaseapp.com",
    databaseURL: "https://angular2-firebase-crud.firebaseio.com",
    projectId: "angular2-firebase-crud",
    storageBucket: "angular2-firebase-crud.appspot.com",
    messagingSenderId: "626158451794"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
