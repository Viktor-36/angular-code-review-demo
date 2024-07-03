import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AnimalsService} from '../../services/animals.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Animal} from '../../models/animal';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsListComponent {
  activeTab: string = 'table';

  constructor(private readonly animalsService: AnimalsService) {
  }

  get animals$(): Observable<Animal[]> {
    return this.animalsService.animals$;
  }

  changeActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  removeAnimal(animal: Animal): void {
    this.animalsService.removeAnimal(animal);
  }
}
