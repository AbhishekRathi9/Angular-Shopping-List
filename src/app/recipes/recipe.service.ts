import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('spicy chicken 65', 'description - this is an Indian recipe', 'https://static01.nyt.com/images/2017/06/07/dining/07INDIAjp7/07INDIAjp7-articleLarge.jpg'),
        new Recipe('Pasta', 'this is an Italian delicacy', 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/e799e8f1-6d45-40e0-9eca-775090b21768.jpg._CB277546185__SR300,300_.jpg')
    ]

    getRecipes() {
        return this.recipes.slice();
    }

}