import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription, map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Branch } from 'src/app/models/Branch.interface';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.scss'],
})
export class AddReceiptComponent extends abstractForm implements OnInit {
  branches! : Branch[];
  subscriptions$ : Subscription = new Subscription();
  constructor(fb: FormBuilder, private branchService : BranchService) {
    super(fb);
  }
  ngOnInit(): void {
    this.createForm({
      name: [],
      lastname: [],
      phoneNumber: [],
      DNI: [],
      address: [],
      email: [],
      branch: [this.branches],
    });
    this.getBranches();
  }
  async getBranches(){
    this.subscriptions$.add(this.branchService.get().pipe(
      map(response=>{
        this.branches = response
      })
    ).subscribe());
  }
  override submit(): void {}
}
