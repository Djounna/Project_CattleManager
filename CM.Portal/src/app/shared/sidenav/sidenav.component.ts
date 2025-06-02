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
                label:'Général',
                icon: 'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Dashboard',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink:'/dashboard'
                    },
                    {
                        label:'Statistiques',
                        icon: 'pi pi-fw pi-chart-pie',
                        routerLink:'/statisticscows'
                    },
                ]
            },
            // {
            //     label: 'Statistiques',
            //     icon: 'pi pi-fw pi-chart-bar',
            //     items:[
            //         {
            //             label:'Bétail',
            //             icon: 'pi pi-fw pi-chart-pie',
            //             routerLink:'/statisticscows'
            //         },
            //         {
            //             label:'Tâches',
            //             icon: 'pi pi-fw pi-chart-pie',
            //             routerLink:'/statisticsjobs'
            //         }
            //     ]
            // },
            {
                label: 'Tâches',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Liste',
                        icon: 'pi pi-fw pi-list-check',
                        routerLink:'/jobs'
                    },
                ]
            },
            {
                label: 'Traites',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Encoder',
                        icon: 'pi pi-fw pi-pen-to-square',
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
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: '/cows'
                    },
                    {
                        label: 'Evènements',
                        icon: 'pi pi-fw pi-clipboard',
                        routerLink: '/events'
                    },
                    {
                        label: 'Groupes',
                        icon: 'pi pi-fw pi-folder-plus',
                        routerLink: '/groups'
                    },
                    {
                        label: 'Enclos',
                        icon: 'pi pi-fw pi-warehouse',
                        routerLink:'/pens'
                    }
                ]
            },
            // {
            //     label: 'Stocks',
            //     icon: 'pi pi-fw pi-calendar',
            //     items: [
            //         {
            //             label: 'Liste',
            //             icon: 'pi pi-fw pi-pencil',
            //         },
            //     ]
            // },
            {
                label: 'Administration',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Travailleurs',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: '/workers'
                    },
                ]
            },
        ];
    }
}
