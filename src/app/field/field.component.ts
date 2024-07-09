import { Component, Input } from '@angular/core';
import { ColorsType } from '../../types/ColorsType';
import { FieldType } from '../../types/FieldType';
import { pattern } from '../../services/pattern';
import { FieldNameType } from '../../types/FieldNameType';

@Component({
  selector: 'main-field',
  standalone: true,
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss',
})
export class FieldComponent {
  @Input() field: FieldType = {
    name: '',
    color: ColorsType.default,
  };
  @Input() password: string | null = null;

  ngOnChanges() {
    this.setColor();
  }

  setColor() {
    const newColor = this.newColor;
    this.field.color = newColor;
  }

  get newColor() {
    if (!this.password || !this.password.length) {
      return ColorsType.default;
    }

    if (this.password.includes(' ')) {
      return ColorsType.invalid;
    }

    if (this.password.length < 8) {
      return ColorsType.invalid;
    }

    if (
      this.password.match(pattern.letters) &&
      this.password.match(pattern.digits) &&
      this.password.match(pattern.symbols)
    ) {
      return ColorsType.valid;
    }

    if (
      (this.password.match(pattern.letters) &&
        this.password.match(pattern.digits)) ||
      (this.password.match(pattern.letters) &&
        this.password.match(pattern.symbols)) ||
      (this.password.match(pattern.symbols) &&
        this.password.match(pattern.digits))
    ) {
      if (this.field.name === FieldNameType.bottom) {
        return ColorsType.default;
      }

      return ColorsType.semivalid;
    }

    if (this.field.name === FieldNameType.top) {
      return ColorsType.invalid;
    }

    return ColorsType.default;
  }

  get classes() {
    return `field footer__field ${this.field.color}`;
  }
}
