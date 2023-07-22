import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plu',
      },
      {
        label: 'Open',
        icon: 'pi pi-fw pi-download',
      },
      {
        label: 'Undo',
        icon: 'pi pi-fw pi-refresh',
      },
    ];
  }
}
