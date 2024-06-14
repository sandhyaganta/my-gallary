import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { TemplatesComponent } from './templates/templates.component';
import { EmplyeesComponent } from './emplyees/emplyees.component';
import { OrdersComponent } from './orders/orders.component';


export const routes: Routes = [
    {path:'',redirectTo:'homepage',pathMatch:'full'},
    {path:'homepage',component:HomePageComponent},
    {path:'dash',component:DashBoardComponent, children:[
        {path:'', component:HomeDashComponent},
        {path:'home',component:HomeDashComponent},
    {path:'subscriptions',component:SubscriptionsComponent},
    {path:'templates',component:TemplatesComponent},
    {path:'emplyees',component:EmplyeesComponent},
    {path:'orders',component:OrdersComponent}
   

    ]},
    
];
