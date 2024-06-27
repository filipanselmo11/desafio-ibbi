import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

export type PositionTypes =
  "center" |
  "top" |
  "bottom" |
  "left" |
  "right" |
  "topleft" |
  "topright" |
  "bottomleft" |
  "bottomright"

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ DialogModule ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Input() header!: string;
  @Input() modal!: boolean;
  @Input() position: PositionTypes = "center";
  @Input() style!: any;
  @Input() visible!: boolean;

  @Output('close-modal') closeModal = new EventEmitter();

  onCloseModal() {
    this.visible = false;
    this.closeModal.emit();
  }
}
