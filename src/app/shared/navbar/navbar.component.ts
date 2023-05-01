import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

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
  items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
    },
    {
      label: 'Sobre Nosotros',
      icon: 'pi pi-users',
    },
    {
      label: 'Productos',
      icon: 'pi pi-box',
    },
  ];
}
