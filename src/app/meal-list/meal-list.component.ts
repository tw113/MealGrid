import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  meals: any[];

  //TODO: make favorites area have smaller cards

  constructor() { }

  ngOnInit(): void {
    this.meals = ["", "", "", "", "", "", ""];
  }

}
