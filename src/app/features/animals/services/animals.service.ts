import {Injectable} from '@angular/core';
import {Animal} from '../models/animal';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private _animalsSubject: BehaviorSubject<Animal[]> = new BehaviorSubject<Animal[]>([]);

  constructor(
    private readonly httpClient: HttpClient) {
    this.loadAnimals().subscribe();
  }

  get animals$(): Observable<Animal[]> {
    return this._animalsSubject.asObservable();
  }

  public addAnimal(animal: Animal): void {
    const tempAnimals: Animal[] = this._animalsSubject.getValue();
    tempAnimals.push(animal);

    this._animalsSubject.next(tempAnimals);
  }

  public removeAnimal(animal: Animal): void {
    const tempAnimals: Animal[] = this._animalsSubject.getValue();

    let index = tempAnimals.findIndex((a) => a.name === animal.name);
    tempAnimals.splice(index, 1);
    this._animalsSubject.next(tempAnimals);
  }

  private loadAnimals(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/animals.json').pipe(
      map((animals: Animal[]) => {
        this._animalsSubject.next(animals);
        return animals;
      })
    )
  }
}
