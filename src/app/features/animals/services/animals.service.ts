import {Injectable} from '@angular/core';
import {Animal} from '../models/animal';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {AuthorizationService} from '../../../core/services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private _animals: Animal[] = [];
  private _animalsSubject: BehaviorSubject<Animal[]> = new BehaviorSubject<Animal[]>([]);

  constructor(
    private readonly authorizationService: AuthorizationService,
    private readonly httpClient: HttpClient) {
    this.loadAnimals().subscribe();
  }

  get animals$(): Observable<Animal[]> {
    return this._animalsSubject.asObservable();
  }

  public addAnimal(animal: Animal): void {
    this._animals.push(animal);
    this._animalsSubject.next(this._animals);
  }

  public removeAnimal(animal: Animal): void {
    let index = this._animals.findIndex((a) => a.name === animal.name);
    this._animals.splice(index, 1);
    this._animalsSubject.next(this._animals);
  }

  private loadAnimals(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/animals.json', {
      headers: {
        'Authorization': `Bearer ${this.authorizationService.accessToken}`
      }
    }).pipe(
      map((animals: Animal[]) => {
        this._animals = animals;
        this._animalsSubject.next(this._animals);
        return animals;
      })
    )
  }
}
