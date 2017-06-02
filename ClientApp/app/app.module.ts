import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { PersonSearchComponent } from './components/person/person-search.component';
import { PersonDetailComponent } from './components/person/person-detail.component';
import { PersonAddComponent } from './components/person/person-add.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        PersonSearchComponent,
        PersonDetailComponent,
        PersonAddComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'person-search', component: PersonSearchComponent},
            { path: 'person-add', component: PersonAddComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
