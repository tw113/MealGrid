import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-grid',
  templateUrl: './meal-grid.component.html',
  styleUrls: ['./meal-grid.component.scss']
})
export class MealGridComponent implements OnInit {
  mealCards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  constructor() { }

  ngOnInit(): void {
  }

}
