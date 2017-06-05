import { Component } from '@angular/core';

@Component({
  selector: 'person',
  template: require('./person.component.html')
})
export class PersonComponent {
  title = 'Personen';
}