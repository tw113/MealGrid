import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealGridComponent } from './meal-grid/meal-grid.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MealListComponent,
    MealGridComponent,
    ShoppingListComponent,
    CalendarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
