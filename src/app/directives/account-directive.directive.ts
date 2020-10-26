import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAccountDirective]'
})
export class AccountDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
