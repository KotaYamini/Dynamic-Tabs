import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabGroupComponent } from './tab-group/tab-group.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
