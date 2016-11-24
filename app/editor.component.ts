import { Component, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'my-editor',
  templateUrl: 'editor.component.html'
})

export class EditorComponent {

  constructor(private location: Location, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'http://localhost:3000/dist/js/startsn.js';
    this.elementRef.nativeElement.appendChild(s);
  }

  goBack(): void {
    this.location.back();
  }
}
