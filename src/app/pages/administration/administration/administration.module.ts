import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from '@ag-grid-community/angular';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
]
/*TODO: Guards, utilizzare un Service per salvare l'attuale utente.
      Provare il Singleton, se posso raggiungere lo stesso utente loggato da ogni parte dell'app
      Verifica con le Guard, autorizzazione admin
      l'utente si logga al login, alla pressione del pulsante di conferma
      togliere la navigazione dal get degli users e fare il check dentro la guardia
*/
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
