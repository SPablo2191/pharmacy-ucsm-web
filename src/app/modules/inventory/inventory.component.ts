import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription, map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Branch } from 'src/app/models/Branch.interface';
import { Depot } from 'src/app/models/Depot.interface';
import { Stock } from 'src/app/models/Stock.interface';
import { BranchService } from 'src/app/services/branch.service';
import { DepotService } from 'src/app/services/depot.service';
import { StockService } from 'src/app/services/stock.service';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent
  extends abstractForm
  implements OnInit, OnDestroy
{
  addComponent: any = AddStockComponent;
  cols: Column[] = [
    { header: 'Producto', field: 'product', subField: 'name' } as Column,
    {
      header: 'Descripción',
      field: 'product',
      subField: 'description',
    } as Column,
    { header: 'Cantidad', field: 'quantity' } as Column,
    {
      header: 'Precio',
      field: 'product',
      subField: 'price',
      pipe: 'currency',
    } as Column,
  ];
  stocks: Stock[] = [];
  branches!: Branch[];
  subscriptions$: Subscription = new Subscription();
  constructor(
    fb: FormBuilder,
    private branchService: BranchService,
    private depotService: DepotService,
    private stockService: StockService,
    private toastService: ToastMessageService
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
          map((response: any) => {
            this.branches = response;
          })
        )
        .subscribe()
    );
  }
  getStock(id: number) {
    console.log(id);
    this.subscriptions$.add(
      this.depotService
        .getId(id)
        .pipe(
          map((depot: Depot[]) => {
            console.log(depot);
            let params = { depot_id: depot[0].id };
            this.subscriptions$.add(
              this.stockService
                .get(params)
                .pipe(
                  map((stocks: Stock[]) => {
                    this.stocks = stocks;
                  })
                )
                .subscribe()
            );
          })
        )
        .subscribe()
    );
  }
  deleteStock(id: number) {
    this.subscriptions$.add(
      this.stockService
        .delete(id)
        .pipe(
          map((response) => {
            this.toastService.showSuccess('¡Se elimino el stock con exito!');
          })
        )
        .subscribe()
    );
  }
}
