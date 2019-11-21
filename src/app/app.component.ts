import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wednesday-evening';
  welcomeMessage = 'I am an angular expert! By Future Will Farrell';
  favoriteFruits = [
    'Blueberry',
    'Watermelon',
    'Lemon',
    'Strawberry',
    'Kiwi'

  ];
}
