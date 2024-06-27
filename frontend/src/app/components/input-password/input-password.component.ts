import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [ PasswordModule, ReactiveFormsModule, FormsModule ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true
    }
  ],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent implements ControlValueAccessor {
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() inputName!: string;

  value!: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
      this.value = value
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}
}
