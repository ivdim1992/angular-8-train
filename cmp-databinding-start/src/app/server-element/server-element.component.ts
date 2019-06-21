import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input("srvElement") element: { type: string; name: string; content: string };
  @ViewChild("heading", { static: true }) header: ElementRef;
    @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef; 

  constructor() {
    console.log("constructor called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ng on changes");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ng oninit called");
    console.log(this.header.nativeElement.textContent)
    console.log(this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log("ng Docheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterAFterContentInit called");
    console.log(this.paragraph.nativeElement.textContent)

  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log(this.header.nativeElement.textContent)

  }

  ngAfterViewChecked() {
    console.log("agAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("Component Destroyed");
  }
}
