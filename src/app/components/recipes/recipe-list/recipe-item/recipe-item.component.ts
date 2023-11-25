import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!:Recipe

  constructor(private recipesService: RecipesService){}



  onSelected(){
    this.recipesService.selectedRecipe.emit(this.recipe);
  }

}
