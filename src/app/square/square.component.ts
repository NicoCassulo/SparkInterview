import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Output() clicked = new EventEmitter();
  showShadowed = false;
  showRed = false;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  squareClicked() {
    this.showRed = !this.showRed;
    this.show = true;
    this.showShadowed = false;
    this.clicked.emit('clicked!');
  }

}
