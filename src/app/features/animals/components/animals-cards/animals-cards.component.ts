import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgOptimizedImage} from '@angular/common';
import {Observable} from 'rxjs';
import {Animal} from '../../models/animal';
import {AnimalsService} from '../../services/animals.service';

@Component({
  selector: 'app-animals-cards',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './animals-cards.component.html',
  styleUrl: './animals-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsCardsComponent {
  constructor(private readonly animalsService: AnimalsService) {
  }

  get animals$(): Observable<Animal[]> {
    return this.animalsService.animals$;
  }
}
