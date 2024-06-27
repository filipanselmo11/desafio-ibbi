import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-prod-card',
  standalone: true,
  imports: [ CardModule ],
  templateUrl: './prod-card.component.html',
  styleUrl: './prod-card.component.css'
})
export class ProdCardComponent {
  @Input() header!: string;
  @Input() src!: string;
  @Input() preco!: string;
  @Input() quantidade!: string;
}
