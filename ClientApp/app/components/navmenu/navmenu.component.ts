import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    title = 'Kinderkultur 2.0';
    modul: Modul = {
        id: 1,
        name: 'Person'
    };
}


export class Modul {
  id: number;
  name: string;
}

