import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { AnotherHighlightDirectiveDirective } from './basic-highlight/another-highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    AnotherHighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
