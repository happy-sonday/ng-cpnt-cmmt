import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListResultComponent } from './check-list/check-list-result/check-list-result.component';
import { CheckListComponent } from './check-list/check-list.component';

@NgModule({
  declarations: [AppComponent, CheckListComponent, CheckListResultComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
