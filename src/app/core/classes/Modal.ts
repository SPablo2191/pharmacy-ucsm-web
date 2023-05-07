import { ConfirmationService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { Subscription } from "rxjs";

export class Modal {
  ref!: DynamicDialogRef;
  subscriptions$ : Subscription = new Subscription();
  constructor(
    protected dialogService: DialogService,
    private confirmationService: ConfirmationService
  ){}
  getDialog(component: any, title: string, data = {}) {
    this.ref = this.dialogService.open(component, {
      header: `${title}`,
      width: '60%',
      data: data,
      maximizable: true,
    });
  }
  delete(id: number,table : string) {
    this.confirmationService.confirm({
      header : `Eliminar ${table}`,
      message: `¿Estás seguro que deseas eliminar este item # ${id}?`,
      accept: () => {
        console.log("hola");

      },
    });
  }
}
