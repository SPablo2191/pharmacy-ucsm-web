import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  template: `
    <div class="field">
      <form [formGroup]="group">
        <label [for]="name" class="text-gray-700">{{ label }}</label>
        <div class="p-inputgroup">
          <p-dropdown
            [formControlName]="name"
            [options]="options"
            [optionLabel]="optionLabel"
            [ngClass]="customClass"
          ></p-dropdown>
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class UiDropdownComponent {
  @Input() group!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() options!: any[];
  @Input() optionLabel!: string;
  @Input() customClass!: string;
}
