import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'addReceipt',
    loadChildren: () =>
      import('./modules/add-receipt/add-receipt.module').then(
        (m) => m.AddReceiptModule
      ),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./modules/inventory/inventory.module').then(
        (m) => m.InventoryModule
      ),
  },
  {
    path: 'receipt',
    loadChildren: () =>
      import('./modules/receipt/receipt.module').then((m) => m.ReceiptModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
