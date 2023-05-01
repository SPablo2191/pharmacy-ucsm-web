import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { abstractForm } from 'src/app/core/classes/abstract-form';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.scss']
})
export class AddReceiptComponent  extends abstractForm implements OnInit{
  constructor(fb: FormBuilder){
    super(fb);
  }
  ngOnInit(): void {
    this.createForm({
      name : [],
      lastname : [],
      phoneNumber : [],
      DNI : [],
      address : [],
    });
  }
}
