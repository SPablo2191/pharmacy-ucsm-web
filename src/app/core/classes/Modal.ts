import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";

export class Modal {
  ref!: DynamicDialogRef;
  constructor(
    protected dialogService: DialogService
  ){}
  getDialog(component: any, title: string, data = {}) {
    this.ref = this.dialogService.open(component, {
      header: `${title}`,
      width: '60%',
      data: data,
      maximizable: true,
    });
  }
}
