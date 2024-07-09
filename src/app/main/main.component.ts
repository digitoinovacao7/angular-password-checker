import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ColorsType } from '../../types/ColorsType';
import { FieldComponent } from '../field/field.component';
import { FieldType } from '../../types/FieldType';
import {
  mustMatchPattern,
  mustNotContainsWhitespaces,
} from '../../services/validationFunctions';
import { ErrorMessage } from '../../types/ErrorMessage';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [ReactiveFormsModule, FieldComponent],
})
export class MainComponent {
  form = new FormGroup({
    password: new FormControl('', {
      validators: [
        Validators.minLength(8),
        mustNotContainsWhitespaces,
        mustMatchPattern,
      ],
    }),
  });
  fields: FieldType[] = [
    { name: 'top', color: ColorsType.default },
    { name: 'middle', color: ColorsType.default },
    { name: 'bottom', color: ColorsType.default },
  ];
  isPasswordShown = false;

  passwordIsShown() {
    this.isPasswordShown = !this.isPasswordShown;
  }

  get hasPasswordErrors() {
    return this.form.get('password')?.errors;
  }

  get hasPasswordWhitespaces() {
    if (!this.form || !this.form.get('password')) {
      return false;
    }

    const errors = this.form.get('password')?.errors;

    if (!errors) {
      return false;
    }

    return errors['doesHaveAWhitespace'] === true;
  }

  get isValidLength() {
    if (!this.form || !this.form.get('password')) {
      return false;
    }

    const errors = this.form.get('password')?.errors;

    if (!errors) {
      return false;
    }

    return errors.hasOwnProperty('minlength');
  }

  get isMatchPattern() {
    if (!this.form || !this.form.get('password')) {
      return false;
    }

    const errors = this.form.get('password')?.errors;

    if (!errors) {
      return false;
    }

    return errors['doesNotMatchPattern'] === true;
  }

  get errorMessage() {
    let errorMessage = '';

    if (this.hasPasswordWhitespaces) {
      errorMessage += ErrorMessage.whitespaces;
    }

    if (this.isMatchPattern) {
      errorMessage += ErrorMessage.doesNotMatchPattern;
    }

    if (this.isValidLength) {
      errorMessage += ErrorMessage.invalidLength;
    }

    return errorMessage;
  }
}
