import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MealPlanner';
  bottomButtons: any;

  ngOnInit() {
    this.bottomButtons = document.getElementsByClassName('bottom-btn');
    this.bottomButtons[3].classList.add('bottom-btn-active');
  }

  onNavClicked(e) {
    for (let i = 0; i < this.bottomButtons.length; i++) {
      this.bottomButtons[i].classList.remove('bottom-btn-active');
      this.bottomButtons[i].classList.add('bottom-btn');
    }
  
    e.target.classList.remove('mat-icon-no-color');
    e.target.classList.add('bottom-btn-active');
  }
}
