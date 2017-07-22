import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {AuthService} from "./shared/auth.service";


@NgModule({
  declarations: [
                    AppComponent,
                    HomePageComponent,
                    MenuComponent,
                    AboutComponent,
                    ContactComponent,
                ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
