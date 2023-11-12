import { Component } from '@angular/core';
import { Ingredient } from 'src/app/models/shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients:Ingredient[]= [
    new Ingredient('apples', 5),
    new Ingredient('tomatos', 4),
  ];
}
