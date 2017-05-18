import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { RouterModule, Routes } from "@angular/router";
import { ItemComponent } from './item/item.component';
import { AngularService } from './angular.service';

const routes: Routes = [
  { path: '', redirectTo: 'api/journal-entries', pathMatch: 'full' },
  { path: 'api/journal-entries',  component: EntryListComponent },
  { path: 'api/journal-entries/item/:id',  component: ItemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
