import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'Calendar';

  ngOnInit() {
    
  }

  changePageTitle(title:string) {
    this.pageTitle = title;
    //TODO: this method
    //      needs to be changed
    //      page title needs to
    //      set on refresh
  }
}
