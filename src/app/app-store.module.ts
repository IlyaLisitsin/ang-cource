import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { CustomRouterStateSerializer } from "./shared/store/utils/router-utils";

// Store reducers
import { reducers, metaReducers } from './store/reducers';

// Store effects
import { AppEffects } from './store/effects';

const initialState = {};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { initialState, metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(AppEffects),
  ],
  exports: [],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
})

export class AppStoreModule { }
