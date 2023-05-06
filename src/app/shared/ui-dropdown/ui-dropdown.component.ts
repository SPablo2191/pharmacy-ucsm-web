import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  template: `
    <div class="field" [formGroup]="group">
      <label for="dropdown" class="text-gray-700">{{ label }}</label>
      <div class="w-full">
        <p-dropdown
          id="dropdown"
          [optionLabel]="optionLabel"
          [optionValue]="optionValue"
          [options]="options"
          [formControlName]="name"
          scrollHeight="100px"
          [placeholder]="placeholder"
          [showClear]="true"
          styleClass="text-muted"
        ></p-dropdown>
      </div>
      <small *ngIf="valid" id="dropdown-help" class="p-error block">{{
        errorMessage
      }}</small>
    </div>
  `,
  styles: [],
})
export class UiDropdownComponent {
  @Input() label!: string;
  @Input() optionLabel!: string;
  @Input() optionValue!: string;
  @Input() options: any[] = [];
  @Input() readOnly: boolean = false;
  @Input() placeholder: string = '';
  @Input() group!: FormGroup;
  @Input() errorMessage!: string;
  @Input() name!: string;
  @Input() type!: string;
  valid: boolean = false;
  @Output() value = new EventEmitter<string>();
  change: Subject<string> = new Subject<string>();

  onInput() {
    this.change.next(this.group.controls[this.name].value);
    this.value.emit(this.group.controls[this.name].value);
  }
}
