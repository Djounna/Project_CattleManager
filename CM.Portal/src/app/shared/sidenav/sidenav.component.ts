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
                label:'Home',
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
                label: 'Tasks',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'All',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink:'/jobs'
                    },
                    {
                        label: 'By Worker',
                        icon: 'pi pi-fw pi-align-right',
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-align-left',
                    },
                ]
            },
            {
                label: 'Cattle',
                icon: 'pi pi-fw pi-pencil',
                items:[
                    {
                        label: 'All',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: '/cows'
                    },
                    {
                        label: 'Groups',
                        icon: 'pi pi-fw pi-pencil',
                    }
                ]
            },
            // {
            //     label: 'Tasks',
            //     icon: 'pi pi-fw pi-file',
            //     items: [
            //         {
            //             label: 'New',
            //             icon: 'pi pi-fw pi-plus',
            //             items: [
            //                 {
            //                     label: 'Task',
            //                     icon: 'pi pi-fw pi-bookmark'
            //                 },
            //                 {
            //                     label: 'RecurringTask',
            //                     icon: 'pi pi-fw pi-video'
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Assign',
            //             icon: 'pi pi-fw pi-trash'
            //         },
            //     ]
            // },
            {
                label: 'Workers',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-user-plus',
                        routerLink: '/workers'
                    },
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                ]
            },
            {
                label: 'Pens',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
