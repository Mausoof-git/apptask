import { Component } from '@angular/core';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent {

  openPopup = false
  
  popup(){
    this.openPopup =!this.openPopup
  }
}
