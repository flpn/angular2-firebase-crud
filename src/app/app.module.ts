import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
