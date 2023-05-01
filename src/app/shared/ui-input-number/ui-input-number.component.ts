import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'ui-input-number',
  standalone: true,
  imports: [CommonModule, InputNumberModule,ReactiveFormsModule],
  template: `
    <div class="field" [formGroup]="group">
      <label for="input" class="text-gray-700">{{ label }}</label>
      <div class="p-inputgroup">
        <p-inputNumber
          id="input"
          inputId="{{ type }}"
          [prefix]="prefix"
          [suffix]="suffix"
          [formControlName]="name"
          [placeholder]="placeholder"
          (onInput)="onInput()"
        >
        </p-inputNumber>
      </div>
      <small *ngIf="valid" id="input-help" class="p-error block">{{
        errorMessage
      }}</small>
    </div>
  `,
  styles: [],
})
export class UiInputNumberComponent {
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() group!: FormGroup;
  @Input() errorMessage!: string;
  @Input() name!: string;
  @Input() type!: string;
  valid: boolean = false;
  @Output() value = new EventEmitter<string>();
  change: Subject<string> = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
  }
  onInput() {
    this.change.next(this.group.controls[this.name].value);
    this.value.emit(this.group.controls[this.name].value);
  }
}
