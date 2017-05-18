import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'person-add',
    template: require('./person-add.component.html')
})
export class PersonAddComponent{
    //public personen: Person[];

    constructor(private http: Http){
    }

    // public getPerson(chosenPersonId: number){
    //     this.personen = [];
    //     this.http.get('/api/person/' + chosenPersonId).subscribe(result => {
    //         this.personen[0] = result.json();
    //     })
    // }

    // public getPersonen(){
    //     this.http.get('/api/person/').subscribe(result => {
    //         this.personen = result.json() as Person[];
    //     })
    // }
}