import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'ui-input-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: ` <p-button [label]="label" type="submit"></p-button> `,
  styles: [],
})
export class UiInputButtonComponent {
  @Input() label!: string;
}
