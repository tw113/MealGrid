import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealGridComponent } from './meal-grid/meal-grid.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';


const routes: Routes = [
  {path: '', redirectTo: 'calendar-view', pathMatch: 'full'},
  {path:'meal-list', component: MealListComponent},
  {path:'meal-grid', component: MealGridComponent},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'calendar-view', component: CalendarViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
