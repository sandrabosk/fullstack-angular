import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AgmCoreModule }  from '@agm/core';
import { MapsRoutes } from './maps/maps.routing';
import { FullScreenMapsComponent } from './maps/fullscreenmap/fullscreenmap.component';
import { GoogleMapsComponent } from './maps/googlemaps/googlemaps.component';
import { VectorMapsComponent } from './maps/vectormaps/vectormaps.component';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { MapsComponent } from './maps/maps.component';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SessionService } from './services/session.service';
import { TravelplansService } from './services/travelplans.service';
import { CustomPlansService } from './services/customplans.service';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { TravelPlansComponent } from './travel-plans/travel-plans.component';
import { NewTravelplanComponent } from './new-travelplan/new-travelplan.component';
import { TravelplanDetailsComponent } from './travelplan-details/travelplan-details.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { SearchPipe } from './pipes/search.pipe';
import { FullscreenmapComponent } from './travelplan-details/fullscreenmap/fullscreenmap.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CustomPlansComponent } from './custom-plans/custom-plans.component';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes),
        RouterModule.forChild(MapsRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDukOM6CMrPzyp-vaBFJPGis8lL1EPGwNs'
        })
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        TravelPlansComponent,
        NewTravelplanComponent,
        TravelplanDetailsComponent,
        AddPeopleComponent,
        SearchPipe,
        FullscreenmapComponent,
        FullScreenMapsComponent,
        GoogleMapsComponent,
        MapsComponent,
        VectorMapsComponent,
        CapitalizePipe,
        CustomPlansComponent
    ],
    providers: [
      SessionService,
      TravelplansService,
      CustomPlansService,
      // {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
