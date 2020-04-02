import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabSelected = 'recipes';

  onNavigate(tab: string) {
    this.tabSelected = tab;
  }
}
