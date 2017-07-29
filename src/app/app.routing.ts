import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { TravelPlansComponent } from './travel-plans/travel-plans.component';
import { NewTravelplanComponent } from './new-travelplan/new-travelplan.component';
import { TravelplanDetailsComponent } from './travelplan-details/travelplan-details.component';
import { AddPeopleComponent } from './add-people/add-people.component';

NewTravelplanComponent
export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'pages/login',
      pathMatch: 'full',
    },
    {
      path: 'pages/register',
      redirectTo: 'pages/register',
      // pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path:'travelplans',
      component: TravelPlansComponent
    },
    {
      path:'travelplans/new',
      component: NewTravelplanComponent
    },
    {
      path:'travelplans/:id',
      component: TravelplanDetailsComponent
    },
    {
      path:'travelplans/:id/addpeople',
      component: AddPeopleComponent
    },
    {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },{
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    },{
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    },{
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    },{
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    },{
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    },{
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },{
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    },{
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    }
  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
