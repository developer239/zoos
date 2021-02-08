import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '@zoos/menu';
import { FishModule } from '@zoos/fish';
import { BirdsModule } from '@zoos/birds';
import { MammalsModule } from '@zoos/mammals';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    MenuModule,
    FishModule,
    BirdsModule,
    MammalsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
