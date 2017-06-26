import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Person } from '../person/person';
import { PersonService } from './person.service';

@Component({
    selector: 'person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.css'],
    providers: [PersonService]
})
export class PersonListComponent implements OnInit {
    // toh :: heroes.component.ts

    public personen: Person[];
    selectedPerson: Person;

    title = "Personen-Liste"
    
    // ToDo : wieder rein
    // constructor(private http: Http){
    // }

    constructor(
        private personService: PersonService, 
        private router: Router) { }

    public getPerson(chosenPersonId: number){
    // ToDo : wieder rein
        /*        this.personen = [];
        this.http.get('/api/person/' + chosenPersonId).subscribe(result => {
            this.personen[0] = result.json();
        })*/
    }

    // ToDo : wieder rein
    /*public getPersonen(){
        // ToDo : wieder rein
        this.http.get('/api/person/').subscribe(result => {
            this.personen = result.json() as Person[];
        })
    }*/
    getPersonen(): void {
        this.personService.getPersonen().then(personen => this.personen = personen);
    }

    onSelect(person: Person): void {
        this.selectedPerson = person;
    }

    ngOnInit(): void {
        this.getPersonen();
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPerson.Key]);
    }   
}

