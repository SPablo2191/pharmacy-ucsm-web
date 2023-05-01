import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


export class abstractForm {
  formGroup!: FormGroup;
  title!: string;
  constructor(
    private fb: FormBuilder
  ) {}

  createForm(data : any): void {
    this.formGroup = this.fb.group(data);
  }

  submit() {
    let data = this.formGroup.value;
  }

}
