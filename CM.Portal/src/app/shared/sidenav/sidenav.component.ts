import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu'

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [PanelMenuModule, MenuModule],
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
                label: 'Schedule',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-align-left',
                    },
                    {
                        label: 'All tasks',
                        icon: 'pi pi-fw pi-align-left',
                    },
                    {
                        label: 'By Worker',
                        icon: 'pi pi-fw pi-align-right',
                    },
                ]
            },
            {
                label: 'Animals',
                icon: 'pi pi-fw pi-pencil',
                items:[
                    {
                        label: 'Cows',
                        icon: 'pi pi-fw pi-pencil',
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
