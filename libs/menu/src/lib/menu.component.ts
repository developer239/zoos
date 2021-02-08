import { Component, Inject } from '@angular/core';
import { MENU_ITEMS_TOKEN } from './menu.tokens';
import { Menu } from './menu.types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    @Inject(MENU_ITEMS_TOKEN) public readonly sections: Menu.ISection[]
  ) {}
}
