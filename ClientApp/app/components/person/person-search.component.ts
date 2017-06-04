import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../person/person';
import { PersonService } from './person.service';

@Component({
    selector: 'person-search',
    template: require('./person-search.component.html'),
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .personen td:hover {
        cursor: pointer;
        color: #607D8B;
        background-color: #DDD;
    }
  `],
    providers: [PersonService]
})
export class PersonSearchComponent{
    public personen: Person[];
    selectedPerson: Person;
    
    // ToDo : wieder rein
    // constructor(private http: Http){
    // }

    constructor(private personService: PersonService) { }

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
}

