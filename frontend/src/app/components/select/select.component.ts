import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [ TreeSelectModule, ReactiveFormsModule, FormsModule ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements ControlValueAccessor {
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() inputName!: string;
  @Input() options!: any;
  value!: any;
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
