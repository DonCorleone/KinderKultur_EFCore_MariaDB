import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'person-detail',
  template: require('./person-detail.component.html')
  })
export class PersonDetailComponent {
  @Input() person: Person;  
}
