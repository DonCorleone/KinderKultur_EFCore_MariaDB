import { Injectable } from '@angular/core';

import {Person} from './person';
import { PERSONEN } from './mock-personen';

@Injectable()
export class PersonService {
  getPersonen(): Promise<Person[]> {
    return Promise.resolve(PERSONEN);
  } //stub
}