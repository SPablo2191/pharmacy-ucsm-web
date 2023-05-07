import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription, map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Branch } from 'src/app/models/Branch.interface';
import { Depot } from 'src/app/models/Depot.interface';
import { BranchService } from 'src/app/services/branch.service';
import { DepotService } from 'src/app/services/depot.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent extends abstractForm implements OnInit, OnDestroy{
  cols : Column[] = [
    {} as Column
  ];
  branches!: Branch[];
  subscriptions$: Subscription = new Subscription();
  constructor(
    fb: FormBuilder,
    private branchService: BranchService,
    private depotService : DepotService,
    private stockService : StockService
  ) {
    super(fb);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.createForm({
      branch: [null, Validators.required],
    });
    this.getBranches();
  }
  async getBranches() {
    this.subscriptions$.add(
      this.branchService
        .get()
        .pipe(
          map((response : any) => {
            this.branches = response;
          })
        )
        .subscribe()
    );
  }
  getStock(id : number){
    console.log(id);
    this.subscriptions$.add(this.depotService.getId(id).pipe(
      map((depot :Depot[])=>{
        console.log(depot);
        let params = {depot_id : depot[0].id};
        this.stockService.get(params).subscribe(console.log)
      })
    ).subscribe());
  }
}
