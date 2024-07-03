import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe, NgForOf} from '@angular/common';
import {Animal} from '../../models/animal';
import {Observable} from 'rxjs';
import {AnimalsService} from '../../services/animals.service';

@Component({
  selector: 'app-animals-table',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './animals-table.component.html',
  styleUrl: './animals-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsTableComponent {
  constructor(private readonly animalsService: AnimalsService) {
  }

  get animals$(): Observable<Animal[]> {
    return this.animalsService.animals$;
  }

  removeAnimal(animal: Animal): void {
    this.animalsService.removeAnimal(animal);
  }
}
