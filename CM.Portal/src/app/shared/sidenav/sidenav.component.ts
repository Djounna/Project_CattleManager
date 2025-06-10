import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  standalone: false
})
export class SidenavComponent {
  public menuItems: MenuItem[] = []
  @Input() set MenuItems(value: MenuItem[]){
    this.menuItems = value;
  }
  public get MenuItems(): MenuItem[]{
    return this.menuItems;
  }
}
