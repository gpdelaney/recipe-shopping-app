import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeProject';
  destination = 'recipes';
  whereToGo(destination: string) {
    this.destination = destination;
  }
}
