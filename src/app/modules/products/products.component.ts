import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Product } from 'src/app/models/Product.interface';
import { ProductService } from 'src/app/services/product.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit,OnDestroy {
  addComponent: any = AddProductComponent;
  subscriptions$ : Subscription = new Subscription();
  cols: Column[] = [
    { header: 'ID', field: 'id' } as Column,
    { header: 'Nombre', field: 'name' } as Column,
    { header: 'Descripción', field: 'description' } as Column,
    { header: 'Precio', field: 'price', pipe: 'currency' } as Column,
  ];
  products$!: Observable<Product[]>;
  constructor(
    private productService: ProductService,
    private toastService: ToastMessageService
  ) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.products$ = this.productService.get();
  }
  deleteProduct(id: number) {
    this.subscriptions$.add(
      this.productService
        .delete(id)
        .pipe(
          map((response) => {
            this.toastService.showSuccess('¡Se elimino el producto con exito!');
          })
        )
        .subscribe()
    );
  }
}
