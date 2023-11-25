import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  selectedRecipe :EventEmitter<Recipe> = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) { }

  recipes:Recipe[] =[
    new Recipe('test','test','https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',[new Ingredient('tomato', 5)]),
    new Recipe('test','test','https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',[new Ingredient('tomato', 5)]),
    new Recipe('test','test','https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',[new Ingredient('tomato', 5)]),
    new Recipe('test','test','https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',[new Ingredient('tomato', 5)]),

  ]

  getRecipes(){
    return this.recipes.slice();
  }

  addIngreidientsToSoppingList(ing: Ingredient[]){
    this.shoppingListService.addListOfIngredients(ing);


  }
}
