import {FormControl} from '@angular/forms';

export interface AnimalForm {
  name: FormControl<string>;
  type: FormControl<string>;
  imageUrl: FormControl<null | string>;
  description: FormControl<string>;
}
