import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ChartComponent } from '../../components/chart/chart.component';
import { SalesService } from '../../services/sales.service';
import { TableComponent } from '../../components/table/table.component';
import { SalesResponse } from '../../types/sales';
import { MenuComponent } from '../../components/menu/menu.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent, ChartComponent, TableComponent, MenuComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  data1: any;
  options1: any;
  data2: any;
  options2: any;
  sales!: SalesResponse[];

  constructor(private salesService: SalesService) {
  }


  loadChart1(): void {
    this.data1 = {
      labels: ['Eletrônicos', 'Livros e Mídia', 'Casa e Decoração', 'Brinquedos e Jogos'],
      datasets: [
        {
          data: [100, 50, 40, 30],
          backgroundColor: [
            '#D2556E',
            '#0A82D2',
            '#41A0A0',
            '#D2AA4B'
          ],
          hoverBackgroundColor: [
            '#D2556E',
            '#0A82D2',
            '#41A0A0',
            '#D2AA4B'
          ],
        }
      ]
    };
    this.options1 = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: '#D2AC49'
          }
        }
      }
    };
  }

  loadChart2(): void {
    this.data2 = {
      labels: [
        'Smartphone Samsung Galaxy A03',
        'Smart TV LG 32LQ621CBSB',
        'Tablet Samsung Galaxy Tab',
        'Fritadeira Easy Fry 3.2 L Red Arno',
        'Samsung Galaxy A14 5g',
        'Aquecedor elétrico Brit. AB1100N branco 127V',
        'Headset over-ear gamer JBL Quantum 100 JBL preto',
        'Fone De Ouvido Bluetooth 5.0',
        'Galaxy Book2 Intel Core I5',
        'Ar condicionado Philco Eco split inverter'
      ],
      datasets: [
        {
          backgroundColor: [
            '#0A82D2',
            '#A50032',
            '#2D6964',
            '#EBF078',
            '#78B91E',
            '#3fa0a0',
            '#2D6964',
            '#008C69',
            '#E1005F',
            '#5A6EFF'],
          data: [50, 49, 45, 38, 36, 22, 20, 19, 10, 8],
          borderWidth: 1
        }
      ],
    };

    this.options2 = {
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    };
  }

  getSales(): void {
    this.salesService.getSales().subscribe((res) => {
      console.log('REs ', res);
      this.sales = res;
    }, (error) => console.log(error));
  }

  ngOnInit(): void {
    this.loadChart1();
    this.loadChart2();
    this.getSales();
  }


}
