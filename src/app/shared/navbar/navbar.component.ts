import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  template: `
    <div>
      <p-menubar [model]="items" styleClass=""></p-menubar>
    </div>
  `,
  styles: [
    `
    ng::host-deep p-menubar{
      background: red;
    }
    `,
  ],
})
export class NavbarComponent {
  items : MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: '/'

    },
    {
      label: 'Productos',
      icon: 'pi pi-box',
      routerLink: '/products'
    },
    {
      label: 'Facturas',
      icon: 'bi bi-receipt',
      routerLink: '/receipt'
    },
  ];
}
