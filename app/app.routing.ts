import {Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {MenuComponent} from "./menu/menu.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full'},
    { path: 'homepage', component: HomePageComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', component: HomePageComponent},

]

export const routing = RouterModule.forRoot(APP_ROUTES);
