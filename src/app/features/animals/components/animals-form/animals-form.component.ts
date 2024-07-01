import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AnimalsService} from '../../services/animals.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-animals-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './animals-form.component.html',
  styleUrl: './animals-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsFormComponent {
  name: string = '';
  type: string = 'Domestic';

  constructor(
    private readonly animalsService: AnimalsService,
    private readonly router: Router) {
  }

  submitForm(): void {
    this.animalsService.addAnimal({
      name: this.name,
      type: this.type
    });

    this.router.navigate(['/animals']);
  }
}
