import {Injectable} from '@angular/core';
import {Animal} from '../models/animal';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
import {AuthorizationService} from '../../../core/services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private _animals: any[] = [];

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly httpClient: HttpClient) {
    this.httpClient.get<any[]>('/animals.json', {
      headers: {
        'Authorization': `Bearer ${authorizationService.accessToken}`
      }
    })
      .pipe(
        tap((animals) => this._animals = animals)
      ).subscribe();
  }

  get animals(): any[] {
    return this._animals;
  }

  public addAnimal(animal: Animal): void {
    this._animals.push(animal);
  }

  public removeAnimal(animal: Animal): void {
    let index = this._animals.findIndex((a) => a.name === animal.name);
    this._animals.splice(index, 1);
  }
}
