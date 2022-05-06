import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginGuestComponent } from './login-guest/login-guest.component';
import { RegisterGuestComponent } from './register-guest/register-guest.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';
import { AddEntriesComponent } from './add-entries/add-entries.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginGuestComponent,
    RegisterGuestComponent,
    ViewEntriesComponent,
    HomeComponent,
    AddEntriesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
