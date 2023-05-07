import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'ui-toast',
  standalone: true,
  imports: [CommonModule, ToastModule],
  template: `
    <p-toast key="success"></p-toast>
    <p-toast key="error"></p-toast>
    <p-toast key="warn"></p-toast>
    <p-toast key="info"></p-toast>
  `,
  styles: [],
})
export class UiToastComponent {}
