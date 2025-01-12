import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    standalone: false
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
                ]
            },
            {
                label: 'Traite',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Encoder',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink:'/milking'
                    },
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
                    },
                    {
                        label: 'Enclos',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink:'/pens'
                    }
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
