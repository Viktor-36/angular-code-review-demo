import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AnimalsService} from '../../services/animals.service';
import {Router} from '@angular/router';
import {Animal} from '../../models/animal';
import {AnimalForm} from '../../models/animal-form';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-animals-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './animals-form.component.html',
  styleUrl: './animals-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalsFormComponent {
  formGroup: FormGroup<AnimalForm> = new FormGroup<AnimalForm>({
    name: new FormControl<string>(
      '',
      {
        nonNullable: true,
        validators: [Validators.required]
      }),
    type: new FormControl<string>(
      '',
      {
        nonNullable: true,
        validators: [Validators.required]
      }),
    imageUrl: new FormControl<null | string>(
      null,
      [Validators.pattern('https?://.*')]
    ),
    description: new FormControl<string>(
      '', {
        nonNullable: true,
        validators: [Validators.required]
      }),
  });

  constructor(
    private readonly animalsService: AnimalsService,
    private readonly router: Router) {
  }

  get name(): FormControl<string> {
    return this.formGroup.controls.name;
  }

  get type(): FormControl<string> {
    return this.formGroup.controls.type;
  }

  get imageUrl(): FormControl<null | string> {
    return this.formGroup.controls.imageUrl;
  }

  get description(): FormControl<string> {
    return this.formGroup.controls.description;
  }

  submitForm(): void {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
      const newAnimal: Animal = this.formGroup.value as Animal;

      this.animalsService.addAnimal(newAnimal);

      this.router.navigate(['/animals']);
    }
  }
}
