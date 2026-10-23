import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleListComponent } from './single-list/single-list.component';
import { DoubleListCopiedItemsComponent } from './double-list-copied-items/double-list-copied-items.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleListComponent,
    DoubleListCopiedItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
