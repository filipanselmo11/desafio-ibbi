import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input('prop-label') label!: string;
  @Output('click-event') clickEvent = new EventEmitter();

  handleClickEvent() {
    this.clickEvent.emit();
  }
}
