import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Person} from './person';
import { PERSONEN } from './mock-personen';

@Injectable()
export class PersonService {
  constructor (private http: Http){
  };

  personen: Person[];
  getPersonen(): Promise<Person[]> {
     return Promise.resolve(PERSONEN);
/*    this.personen = [];
    this.http.get('/api/Person/').subscribe(result => {
    this.personen = result.json() as Person[];
   })
*/
   //return Promise.resolve(this.personen);
        // public getPerson(chosenPersonId: number){
    //     this.personen = [];
    //     this.http.get('/api/person/' + chosenPersonId).subscribe(result => {
    //         this.personen[0] = result.json();
    //     })
    // }
  } //stub
  getPerson(id: number): Promise<Person> {
    return this.getPersonen()
              .then(personen => personen.find(person => person.Key === id));
  }
}