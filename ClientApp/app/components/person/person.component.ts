import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'person',
    template: require('./person.component.html')
})
export class PersonComponent{
    public personen: Person[];

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
}

interface Person {
    Key: number;
    Name: string;
    Vorname: string;
    eMail: string;
}