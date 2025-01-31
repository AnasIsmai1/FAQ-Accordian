import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  @Input() item: any;

  isShown= false;

  toShow() {
    this.isShown = (!this.isShown)? true : false;
  }

}
