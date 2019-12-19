import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SqliteHelperProvider } from '../providers/sqlite-helper/sqlite-helper';


// Plugin
import { SQLite } from '@ionic-native/sqlite';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseConfig = {
  apiKey: "AIzaSyCYa_kFIte32kXPqCyMCbP2h4OH8Yuin60",
  authDomain: "ortem-restaurant.firebaseapp.com",
  databaseURL: "https://ortem-restaurant.firebaseio.com",
  projectId: "ortem-restaurant",
  storageBucket: "ortem-restaurant.appspot.com",
  messagingSenderId: "944269550395",
  appId: "1:944269550395:web:0c6436ecb2eac30d8dcd1e",
  measurementId: "G-BQYH3FEZ7R"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SqliteHelperProvider
  ]
})
export class AppModule {}
