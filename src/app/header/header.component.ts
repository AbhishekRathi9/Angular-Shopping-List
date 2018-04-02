import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('feature') feature = new EventEmitter<string>();
  
 

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(feature : string){
    this.feature.emit(feature);
  }

  onShoppingClick(feature : string){
    this.feature.emit(feature);
  }

}
