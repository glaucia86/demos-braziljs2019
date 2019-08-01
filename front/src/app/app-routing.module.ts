import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalestranteAddComponent } from './palestrante-add/palestrante-add.component';
import { PalestranteEditComponent } from './palestrante-edit/palestrante-edit.component';
import { PalestranteGetComponent } from './palestrante-get/palestrante-get.component';

const routes: Routes = [
  { path: 'palestrante/create', component: PalestranteAddComponent },
  { path: 'palestrante/edit/:id', component: PalestranteEditComponent },
  { path: 'palestrante', component: PalestranteGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
