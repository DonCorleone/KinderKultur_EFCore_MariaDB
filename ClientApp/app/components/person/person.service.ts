import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Person} from './person';
import 'rxjs/add/operator/toPromise';
//import { PERSONEN } from './mock-personen';

@Injectable()
export class PersonService {
  private personUrl = '/api/Person';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http){
  };

  create(name: string): Promise<Person> {
    return this.http
      .post(this.personUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Person)
      .catch(this.handleError);
  }

  getPersonen(): Promise<Person[]> {
    return this.http.get(this.personUrl)
              .toPromise()
              .then(response => response.json() as Person[])
              .catch(this.handleError);
  } //stub

  getPerson(id: number): Promise<Person> {

    const url = `${this.personUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Person)
      .catch(this.handleError);
  }
  
  update(person: Person): Promise<Person> {
    const url = `${this.personUrl}/${person.key}`;
    return this.http
      .put(url, JSON.stringify(person), {headers: this.headers})
      .toPromise()
      .then(() => person)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.personUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('shiid', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}