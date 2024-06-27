import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

type CharTypes = "bar" | "doughnut";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ ChartModule ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  @Input() type: CharTypes = "bar";
  @Input() data: any;
  @Input() options: any;
}
