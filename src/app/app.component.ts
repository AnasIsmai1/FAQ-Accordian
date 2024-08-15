import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '03-test';


  isMobile : boolean = false;

  checkSize(e: any) {

    if(e.target.innerWidth < 800) {
      this.isMobile = true;
    }else {
      this.isMobile = false;
    }
  }
}
