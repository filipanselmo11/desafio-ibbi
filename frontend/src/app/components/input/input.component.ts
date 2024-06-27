import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ InputTextModule, ReactiveFormsModule ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements ControlValueAccessor {
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
