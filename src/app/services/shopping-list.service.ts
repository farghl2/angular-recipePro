import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients:Ingredient[]=[
    new Ingredient('apples', 5),
    new Ingredient('tomatos', 4),
  ];

  ing = new EventEmitter<Ingredient[]>();

  constructor() { }

  getAllIngredients(){
    return this.ingredients.slice();

  }

  addIngriednt(ingredient: Ingredient){
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ing.emit(this.ingredients.slice());
  }

  addListOfIngredients(ing: Ingredient[]){
    this.ingredients.push(...ing);
    this.ing.emit(this.ingredients.slice());

  }
}
