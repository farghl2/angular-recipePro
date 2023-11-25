import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/shared/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredient[]= [];
  constructor(private shoppingLisService: ShoppingListService){}

  ngOnInit(): void {
    this.getAllIngredients();
  }

  getAllIngredients(){
    this.ingredients=  this.shoppingLisService.getAllIngredients()
    this.shoppingLisService.ing.subscribe((ing:Ingredient[])=>{
      this.ingredients = ing;
    })
  }

}
