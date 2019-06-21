import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appAnotherHighlightDirective]"
})
export class AnotherHighlightDirectiveDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgorundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "orange";

  ngOnInit() {
    console.log(this.renderer);
    this.backgorundColor = 'green';
    //   this.renderer.setStyle(this.elRef.nativeElement,'background-color','orange');
    // this.renderer.addClass(this.elRef.nativeElement,'active')
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "orange"
    // );
    this.backgorundColor = this.highlightColor;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgorundColor = this.defaultColor;
  }
}
