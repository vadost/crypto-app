import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPercentChange]'
})
export class PercentChangeDirective implements AfterViewInit {
  @Input() appPercentChange: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.style.color = this.appPercentChange.startsWith('-') ? 'red' : 'green';
  }
}
