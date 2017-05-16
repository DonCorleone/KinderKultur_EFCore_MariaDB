import { Component } from '@angular/core';
import { Http } from '@angular/http';
//import { Person } from 'WebApplicationBasic/Models';

@Component({
    selector: 'person',
    template: require('./person.component.html')
})
export class PersonComponent{
    public person: Person;
    public personen: Person[];

    constructor(private http: Http){
    }

    public getPerson(chosenPersonId: number){
        this.http.get('/api/person/' + chosenPersonId).subscribe(result => {
            this.person = result.json();
        })
    }

    public getPersonen(){
        this.http.get('/api/person/').subscribe(result => {
            this.personen = result.json();
        })
    }
}

interface Person {
    Key: number;
    Name: string;
    Vorname: string;
    eMail: string;
}