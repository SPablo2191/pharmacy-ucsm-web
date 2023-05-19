import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {

  transform(error : any): string {
    let message : string = '';
    if(error.required){
      return 'Campo Requerido'
    }
    if(error.pattern){
      return 'Formato invalido';
    }
    return message;
  }

}
