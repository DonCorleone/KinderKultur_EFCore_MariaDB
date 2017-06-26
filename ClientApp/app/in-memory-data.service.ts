import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const personen = [
      {Key: 11, Geschlecht: 'M', Name: 'Chichi', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 12, Geschlecht: 'M', Name: 'Narco', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 13, Geschlecht: 'M', Name: 'Bombasto', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 14, Geschlecht: 'M', Name: 'Celeritas', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 15, Geschlecht: 'M', Name: 'Magneta', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 16, Geschlecht: 'M', Name: 'RubberMan', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 17, Geschlecht: 'M', Name: 'Dynama', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 18, Geschlecht: 'M', Name: 'Dr IQ', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 19, Geschlecht: 'M', Name: 'Magma', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') },
        {Key: 20, Geschlecht: 'M', Name: 'Tornado', Vorname:'Fritz', eMail: 'a@b.com', Geburtsdatum: new Date('1968-11-16T00:00:00') }
    ];
/*    [
      {"key":1,"name":"Hugentobler","vorname":"Fritz","eMail":"fritz@hugentobler.com","geburtsdatum":"1980-01-01T00:00:00","geschlecht":null},
      {"key":2,"name":"Wieland","vorname":"Leyla","eMail":"goera@holand.com","geburtsdatum":"2014-01-27T00:00:00","geschlecht":null},
      {"key":3,"name":"Wieland","vorname":"Natalie","eMail":"nat_wieland@hotmail.com","geburtsdatum":"1980-01-25T00:00:00","geschlecht":null},
      {"key":4,"name":"Marty","vorname":"Andreas","eMail":"xy@hotmail.com","geburtsdatum":"1965-08-07T00:00:00","geschlecht":null}
    ]*/
    return {personen};
  }
}