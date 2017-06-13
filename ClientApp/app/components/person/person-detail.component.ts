// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PersonService }            from './person.service';
import { Person }                   from './person';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'person-detail',
  template: require('./person-detail.component.html')
  })
export class PersonDetailComponent implements OnInit {
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.personService.getPerson(+params['id']))
      .subscribe(person => this.person = person);
  }
  @Input() person: Person;

  goBack(): void {
    this.location.back();
  }
}
