import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS_TOKEN } from '@zoos/menu';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: MENU_ITEMS_TOKEN,
      useValue: { name: 'birds', items: ['Blue', 'Rocky', 'Jett', 'Rio'] },
      multi: true,
    },
  ],
})
export class BirdsModule {}
