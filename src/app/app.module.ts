import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { StorybookdesignComponent } from './storybookdesign/storybookdesign.component';
import { AppSharedModule } from './app-shared/app-shared.module';

@NgModule({
  imports: [
    AppSharedModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
    ])
  ],
  declarations: [
    AppComponent,
    StorybookdesignComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/