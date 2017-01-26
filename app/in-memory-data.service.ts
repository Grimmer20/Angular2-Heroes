import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
   createDb() {
    let heroes = [
      {id: 1, name: 'Mom'},
      {id: 2, name: 'Dad'},
      {id: 3, name: 'Bart Starr'},
      {id: 4, name: 'Reggie White'},
      {id: 5, name: 'LeRoy Butler'},
      {id: 6, name: 'Vince Lombardi'},
      {id: 7, name: 'Ray Nitsche'},
      {id: 8, name: 'Frozen Tundra'},
      {id: 9, name: 'Aaron Rodgers'},
      {id: 0, name: 'Brett Favre'}
    ];
    return {heroes};
  }
}