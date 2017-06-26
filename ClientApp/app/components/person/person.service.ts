import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Person} from './person';
import 'rxjs/add/operator/toPromise';
//import { PERSONEN } from './mock-personen';

@Injectable()
export class PersonService {
  private personUrl = '/api/personen';  // URL to web api

  constructor (private http: Http){
  };

  getPersonen(): Promise<Person[]> {
    return this.http.get(this.personUrl)
              .toPromise()
              .then(response => response.json().data as Person[])
              .catch(this.handleError);
  
   //return Promise.resolve(this.personen);
        // public getPerson(chosenPersonId: number){
    //     this.personen = [];
    //     this.http.get('/api/person/' + chosenPersonId).subscribe(result => {
    //         this.personen[0] = result.json();
    //     })
    // }
  } //stub

  getPerson(id: number): Promise<Person> {

/*    const url = `${this.personUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Person)
      .catch(this.handleError);*/
   return this.getPersonen()
              .then(personen => personen.find(person => person.Key === id));
  }

/*  getPerson(id: number): Promise<Person> {

  }*/

  private headers = new Headers({'Content-Type': 'application/json'});

  update(person: Person): Promise<Person> {
    const url = `${this.personUrl}/${person.Key}`;
    return this.http
      .put(url, JSON.stringify(person), {headers: this.headers})
      .toPromise()
      .then(() => person)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('shiid', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}