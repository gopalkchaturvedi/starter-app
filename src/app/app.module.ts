import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HomeComponent } from './home/home.component';
import { PrintComponent } from './print/print.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CounterComponent } from './counter/counter.component';
import { UseOfTemplateComponent } from './use-of-template/use-of-template.component';
import { LearnStyleComponent } from './learn-style/learn-style.component';
import { SizerComponent } from './sizer/sizer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginGuestComponent } from './login-guest/login-guest.component';
import { RegisterGuestComponent } from './register-guest/register-guest.component';
import { ViewEntriesComponent } from './view-entries/view-entries.component';
import { AddEntriesComponent } from './add-entries/add-entries.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    HomeComponent,
    PrintComponent,
    ToDoComponent,
    CounterComponent,
    UseOfTemplateComponent,
    LearnStyleComponent,
    SizerComponent,
    NavbarComponent,
    LoginGuestComponent,
    RegisterGuestComponent,
    ViewEntriesComponent,
    AddEntriesComponent
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
