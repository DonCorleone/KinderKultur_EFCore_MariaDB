import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person }           from './person';

@Injectable()
export class PersonSearchService {

  private personUrl = '/api/Person';  // URL to web api
  
  constructor(private http: Http) {}

  search(term: string): Observable<Person[]> {
    const url = `${this.personUrl}/?searchTerm=${term}`;
    return this.http
               .get(url)
               .map(response => response.json() as Person[]);
  }
}