import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('name') nameRef : ElementRef;
@ViewChild('amount') amountRef : ElementRef;
@Output('shoppingItem') shoppingItem = new EventEmitter<Ingredient>();
 
constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.shoppingItem.emit(new Ingredient(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value))
 }

}
