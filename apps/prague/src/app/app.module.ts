import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from '@zoos/menu';
import { FishModule } from '@zoos/fish';
import { BirdsModule } from '@zoos/birds';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MenuModule, FishModule, BirdsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
