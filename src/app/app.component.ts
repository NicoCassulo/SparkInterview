import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterviewProject';
  array = [1,2,3,4];
  squareClicked(value) {
    console.log(value);
  }
}
