import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label:'Acceuil',
                icon: 'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Dashboard',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink:'/dashboard'
                    }
                ]
            },
            {
                label: 'Tâches',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Liste',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink:'/jobs'
                    },
                    {
                        label: 'Par travailleur',
                        icon: 'pi pi-fw pi-align-right',
                    },
                    {
                        label: 'Par enclos',
                        icon: 'pi pi-fw pi-align-left',
                    }
                ]
            },
            {
                label: 'Bétail',
                icon: 'pi pi-fw pi-pencil',
                items:[
                    {
                        label: 'Liste',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: '/cows'
                    },
                    {
                        label: 'Groupes',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: '/groups'
                    }
                ]
            },
            {
                label: 'Enclos',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Liste',
                        icon: 'pi pi-fw pi-pencil',
                    },
                ]
            },
            {
                label: 'Stocks',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Liste',
                        icon: 'pi pi-fw pi-pencil',
                    },
                ]
            },
            {
                label: 'Travailleurs',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Liste',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: '/workers'
                    },
                ]
            },
        ];
    }
}
