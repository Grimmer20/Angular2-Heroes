import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; // used to convert http packet into a json object

import { Hero } from './hero';


@Injectable()
export class HeroService {
  
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[]) // convert the promise into JSON, this example the JSON is the heroes array. Console.log to determine properties of the response when developing??!
               // This example returnns json object with data property
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;  // grabs the hero id from the params
    return this.http.get(url) // now use the created url which is the id of a hero so we don't pull the entire Array
               .toPromise()
               .then(response => response.json().data as Hero)
               .catch(this.handleError);
  }

 private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`; //once again hero id encoded into URL
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
  return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
}
