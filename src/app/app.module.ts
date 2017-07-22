import { NgModule } from '@angular/core';
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
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        TravelPlansComponent,
        NewTravelplanComponent,
        TravelplanDetailsComponent,
        AddPeopleComponent,
        SearchPipe
    ],
    providers: [
      SessionService,
      TravelplansService,
      CustomPlansService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
