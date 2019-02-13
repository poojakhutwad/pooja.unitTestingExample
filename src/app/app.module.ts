import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';
import { TestMethodComponent } from './test-method/test-method.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMultPipe,
    MarvellousChkPipe,
    TestMethodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
