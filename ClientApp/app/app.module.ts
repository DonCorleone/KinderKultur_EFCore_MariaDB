import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { PersonComponent } from './components/person/person.component';
import { PersonListComponent } from './components/person/person-list.component';
import { PersonDetailComponent } from './components/person/person-detail.component';
import { PersonAddComponent } from './components/person/person-add.component';
import { PersonService } from './components/person/person.service';

import { DashboardComponent } from './components/person/dashboard.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        PersonComponent,
        PersonListComponent,
        PersonDetailComponent,
        PersonAddComponent,
        DashboardComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        //BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'my-personen', component: PersonComponent},
            { path: 'person-list', component: PersonListComponent},
            { path: 'detail/:id', component: PersonDetailComponent},
            { path: 'person-add', component: PersonAddComponent},
            { path: 'dashboard', component: DashboardComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        PersonService
    ],
})
export class AppModule {
}
