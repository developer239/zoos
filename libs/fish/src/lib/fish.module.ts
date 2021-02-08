import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS_TOKEN } from 'apps/prague/src/app/components/menu/menu.tokens';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: MENU_ITEMS_TOKEN,
      useValue: { name: 'fish', items: ['Tuna', 'Marlin', 'Flounder'] },
      multi: true,
    },
  ],
})
export class FishModule {}
