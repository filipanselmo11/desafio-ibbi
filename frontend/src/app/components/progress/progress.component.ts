import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [ ProgressSpinnerModule ],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

}
