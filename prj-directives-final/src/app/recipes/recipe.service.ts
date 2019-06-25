import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [
          new Ingredient('Meat',1),
          new Ingredient('French Friens',20)
      ]
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [
          new Ingredient('Bunds',2),
          new Ingredient('Burger',3)
      ]
    )
  ];
  constructor(private _shoppingListService:ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }
}
