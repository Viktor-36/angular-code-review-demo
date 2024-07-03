import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AnimalsService} from '../../services/animals.service';
import {NgForOf, NgIf} from '@angular/common';
import {Animal} from '../../models/animal';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsListComponent {
  activeTab: string = 'table';

  constructor(public readonly animalsService: AnimalsService) {
  }

  changeActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  removeAnimal(animal: Animal): void {
    this.animalsService.removeAnimal(animal);
  }
}
