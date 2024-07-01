import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AnimalsService} from '../../services/animals.service';
import {NgForOf} from '@angular/common';
import {Animal} from '../../models/animal';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsListComponent {
  constructor(public readonly animalsService: AnimalsService) {
  }

  removeAnimal(animal: Animal): void {
    this.animalsService.removeAnimal(animal);
  }
}
