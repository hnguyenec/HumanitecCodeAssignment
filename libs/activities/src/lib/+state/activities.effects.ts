import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  LoadActivities,
  ActivitiesLoaded,
  ActivitiesActionTypes
} from './activities.actions';
import { ActivitiesState } from './activities.reducer';

@Injectable()
export class ActivitiesEffects {
  @Effect() loadActivities$ = this.dataPersistence.fetch(
    ActivitiesActionTypes.LoadActivities,
    {
      run: (action: LoadActivities, state: ActivitiesState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ActivitiesLoaded([]);
      },

      onError: (action: LoadActivities, error) => {
        console.error('Error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ActivitiesState>
  ) {}
}
