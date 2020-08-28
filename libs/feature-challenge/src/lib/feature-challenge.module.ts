import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureChallengeRoutingModule } from './feature-challenge-routing.module';
import { Button1Module } from '../../../shared-separate-ui/src/lib/button1/button1.module';
import { Button4Module } from '../../../shared-separate-ui/src/lib/button4/button4.module';
import { SharedPrimeModule } from '@bet-on-my-life/shared-prime';

@NgModule({
  imports: [
    CommonModule,
    FeatureChallengeRoutingModule,
    Button1Module,
    Button4Module,
    SharedPrimeModule,
  ],
})
export class FeatureChallengeModule {}
