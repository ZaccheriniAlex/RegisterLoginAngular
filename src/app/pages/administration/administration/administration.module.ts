import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from '@ag-grid-community/angular';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
]

@NgModule({
  declarations: [
    AdministrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
  ],
})
export class AdministrationModule { }
