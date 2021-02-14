import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() searchedWord?: string; // searchText
  @Input() fileName!: string; // File Name
  @Input() fileUrl!: string;
  @Input() classToApply?: string; //class to apply for highlighting

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.fileName) {
      return;
    }

    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      return;
    }
    
    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }

  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord})`, 'gi');
    return this.fileName?.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
}
