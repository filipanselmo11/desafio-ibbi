import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';


@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [InputNumberModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css'
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() inputName!: string;
  @Input() mode?: any;
  @Input() minFractionsDigits?: string;
  @Input() maxFractionDigits?: string;

  value!: string;

  onChange: any = () => { };
  onTouched: any = () => { };

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

  registerOnTouched(fn: any): void { }

  setDisabledState(isDisabled: boolean): void { }
}
