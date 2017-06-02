import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../person/person';

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
  `]
})
export class PersonSearchComponent{
    public personen: Person[];
    selectedPerson: Person;
    
    constructor(private http: Http){
    }

    public getPerson(chosenPersonId: number){
        this.personen = [];
        this.http.get('/api/person/' + chosenPersonId).subscribe(result => {
            this.personen[0] = result.json();
        })
    }

    public getPersonen(){
        this.http.get('/api/person/').subscribe(result => {
            this.personen = result.json() as Person[];
        })
    }
    onSelect(person: Person): void {
        this.selectedPerson = person;
    }
}

