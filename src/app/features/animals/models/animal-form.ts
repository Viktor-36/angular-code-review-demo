import {FormControl} from '@angular/forms';
import {AnimalType} from './animal-type';

export interface AnimalForm {
  name: FormControl<string>;
  type: FormControl<AnimalType>;
  imageUrl: FormControl<null | string>;
  description: FormControl<string>;
}
