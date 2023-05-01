import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <p-button
      styleClass="w-15rem h-15rem flex justify-content-center border-white shadow-4 bg-white text-gray-600 hover:bg-red-600 hover:text-white"
    >
      <div class="flex-column">
        <i [class]="icon" style="font-size: 150px;"></i>
        <p>{{ label }}</p>
      </div>
    </p-button>
  `,
  styles: [],
})
export class HomeButtonComponent {
  @Input() icon!: string;
  @Input() label!: string;
}
