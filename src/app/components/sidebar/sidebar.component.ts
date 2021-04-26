import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Tickety',  icon: 'fact_check', class: '' },
    { path: '/ve-fronte', title: 'Ve frontě',  icon: '', class: 'subcategory pl-4' },
    { path: '/v-behu', title: 'V běhu',  icon: '', class: 'subcategory pl-4' },
    { path: '/k-uzavreni', title: 'K uzavření',  icon: '', class: 'subcategory pl-4' },
    { path: '/hotove', title: 'Hotové',  icon: '', class: 'subcategory pl-4' },
    { path: '/zrusene', title: 'Zrušené',  icon: '', class: 'subcategory pl-4' },
    //{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/tables', title: 'Kategorie',  icon:'view_list', class: '' },
    { path: '/user-profile', title: 'Uživatelé',  icon:'people', class: '' },
    //{ path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    //{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
