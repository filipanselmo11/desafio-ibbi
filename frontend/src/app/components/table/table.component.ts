import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ TableModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() products!: any[];

}
