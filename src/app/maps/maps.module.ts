import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AgmCoreModule
} from '@agm/core';

import { MapsRoutes } from './maps.routing';

// import { FullScreenMapsComponent } from './fullscreenmap/fullscreenmap.component';
// import { GoogleMapsComponent } from './googlemaps/googlemaps.component';
// import { VectorMapsComponent } from './vectormaps/vectormaps.component';
// import { MapsComponent } from './maps.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDukOM6CMrPzyp-vaBFJPGis8lL1EPGwNs'
    })
  ],
  declarations: [
      // FullScreenMapsComponent,
      // GoogleMapsComponent,
      // VectorMapsComponent,
      // MapsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MapsModule {}
