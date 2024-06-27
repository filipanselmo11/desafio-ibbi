import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MenuModule, CommonModule, ButtonModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
          label: 'Navegação',
          items: [
              {
                  label: 'Home',
                  command: () => { this.router.navigate(['home']) }
              },
              {
                  label: 'Dashboard',
                  command: () => { this.router.navigate(['dashboard'])}
              }
          ]
      }
  ];
  }
}
