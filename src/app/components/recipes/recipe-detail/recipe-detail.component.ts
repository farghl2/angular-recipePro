import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { Ingredient } from 'src/app/models/shared/ingredient';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipeDetails?: Recipe ;
  constructor(private recipesService: RecipesService){}

  ngOnInit(): void {
    this.recipesService.selectedRecipe.subscribe((recipe)=>{
      this.recipeDetails = recipe;

    })
  }

  addIngredientsToShoppinList(ing:any){
    this.recipesService.addIngreidientsToSoppingList(ing);

  }


}
