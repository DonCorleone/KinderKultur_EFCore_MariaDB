import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { UniversalModule } from 'angular2-universal';

import { AppRoutingModule } from './app-routing.module';

/*// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';*/

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { PersonComponent } from './components/person/person.component';
import { PersonListComponent } from './components/person/person-list.component';
import { PersonDetailComponent } from './components/person/person-detail.component';
import { PersonAddComponent } from './components/person/person-add.component';
import { PersonSearchComponent } from './components/person/person-search.component';
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
        PersonSearchComponent,
        DashboardComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        //BrowserModule,
        FormsModule,
        HttpModule,
       // InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    providers: [
        PersonService
    ],
})
export class AppModule {
}
