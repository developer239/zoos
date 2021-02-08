import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from 'apps/prague/src/app/components/menu/menu.component';
import { BirdsModule } from '@zoos/birds';
import { FishModule } from '@zoos/fish';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, BirdsModule, FishModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
