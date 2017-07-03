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

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.personService.create(name)
            .then(hero => {
            this.personen.push(hero);
            this.selectedPerson = null;
            });
    }

    delete(person: Person): void {
        this.personService
            .delete(person.key)
            .then(() => {
                this.personen = this.personen.filter(h => h !== person);
                if (this.selectedPerson === person) { this.selectedPerson = null; }
            });
        }
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
        this.router.navigate(['/detail', this.selectedPerson.key]);
    }   
}

