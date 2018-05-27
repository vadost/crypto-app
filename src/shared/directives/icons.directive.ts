import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIcons]'
})
export class IconsDirective implements AfterViewInit {
  @Input() type: string;
  @Input() code: string;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const class1 = `icon-${this.type}-${this.code}`;
    const class2 = `default-${this.type}`;
    this.el.nativeElement.classList.add(class1, class2);
  }
}
