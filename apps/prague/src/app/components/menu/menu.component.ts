import { Component, Inject } from '@angular/core';
import { MENU_ITEMS_TOKEN } from 'apps/prague/src/app/components/menu/menu.tokens';
import { Menu } from 'apps/prague/src/app/components/menu/menu.types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(@Inject(MENU_ITEMS_TOKEN) sections: Menu.ISection[]) {
    console.log('sections', sections);
  }
}
