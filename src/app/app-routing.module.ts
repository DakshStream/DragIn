import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleListComponent } from './single-list/single-list.component';
import { DoubleListCopiedItemsComponent } from './double-list-copied-items/double-list-copied-items.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'single',
    pathMatch: 'full'
  },
  {
    path: 'single',
    component: SingleListComponent
  },
  {
    path: 'double',
    component: DoubleListCopiedItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
