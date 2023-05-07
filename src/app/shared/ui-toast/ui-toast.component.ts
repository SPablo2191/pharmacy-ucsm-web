import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ui-toast works!
    </p>
  `,
  styles: [
  ]
})
export class UiToastComponent {

}
