import { InjectionToken } from '@angular/core';
import { Menu } from 'apps/prague/src/app/components/menu/menu.types';

export const MENU_ITEMS_TOKEN = new InjectionToken<Menu.ISection>(
  'menu-items-token'
);
