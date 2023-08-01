import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SongComponent } from './pages/song/song.component';
import { BrowseCardComponent } from './components/browse-card/browse-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ThemeComponent } from './theme/theme.component';
import { PlayingcardComponent } from './playingcard/playingcard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
    SignupComponent,
    LoginComponent,
    SongCardComponent,
    NavbarComponent,
    SongComponent,
    BrowseCardComponent,
    ThemeComponent,
    PlayingcardComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
