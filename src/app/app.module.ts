import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListResultComponent } from './check-list/check-list-result/check-list-result.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListDataService } from './check-list/check-list-data.service';
import { ResultGraphComponent } from './check-list/check-list-result/result-graph/result-graph.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckListResultComponent,
    ResultGraphComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CheckListDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
