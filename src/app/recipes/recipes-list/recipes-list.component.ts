import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 
  recipes : Recipe[] = [
   new Recipe('spicy chicken 65','description - this is an Indian recipe', 'https://static01.nyt.com/images/2017/06/07/dining/07INDIAjp7/07INDIAjp7-articleLarge.jpg'),
   new Recipe('Pasta','this is an Italian delicacy', 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/e799e8f1-6d45-40e0-9eca-775090b21768.jpg._CB277546185__SR300,300_.jpg')

  ]

 
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}