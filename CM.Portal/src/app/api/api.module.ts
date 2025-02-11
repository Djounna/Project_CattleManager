/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AlertService } from './services/alert.service';
import { CowService } from './services/cow.service';
import { GestationService } from './services/gestation.service';
import { GroupService } from './services/group.service';
import { IntervenantService } from './services/intervenant.service';
import { InterventionService } from './services/intervention.service';
import { JobService } from './services/job.service';
import { MilkingService } from './services/milking.service';
import { MilkProductionService } from './services/milk-production.service';
import { PenService } from './services/pen.service';
import { StatisticService } from './services/statistic.service';
import { StockService } from './services/stock.service';
import { UserManagementService } from './services/user-management.service';
import { VaccinationService } from './services/vaccination.service';
import { WorkerService } from './services/worker.service';
import { WorkerJobService } from './services/worker-job.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AlertService,
    CowService,
    GestationService,
    GroupService,
    IntervenantService,
    InterventionService,
    JobService,
    MilkingService,
    MilkProductionService,
    PenService,
    StatisticService,
    StockService,
    UserManagementService,
    VaccinationService,
    WorkerService,
    WorkerJobService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
