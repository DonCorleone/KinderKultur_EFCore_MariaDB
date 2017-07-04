import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';
import { PersonSearchComponent } from './person-search.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
})
export class DashboardComponent implements OnInit {
  personen: Person[] = [];
  constructor(private personService: PersonService) { }
  ngOnInit(): void {
    this.personService.getPersonen()
      .then(personen => this.personen = personen.slice(1, 5));
  }
}