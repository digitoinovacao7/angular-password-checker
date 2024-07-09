import { AbstractControl } from "@angular/forms";
import { pattern } from "./pattern";

export const mustNotContainsWhitespaces = (control: AbstractControl) => {
  if (control.value.includes(' ')) {
    return {
      doesHaveAWhitespace: true,
    };
  }

  return null;
};

export const mustMatchPattern = (control: AbstractControl) => {
  if (
    (control.value.match(pattern.letters) &&
      control.value.match(pattern.digits) &&
      control.value.match(pattern.symbols)) ||
    control.value === null ||
    control.value === ''
  ) {
    return null;
  }

  return { doesNotMatchPattern: true };
};
