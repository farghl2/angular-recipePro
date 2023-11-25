import { Component } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shopingListService: ShoppingListService){}


  addIngredient(form:any){
    this.shopingListService.addIngriednt({name:form.value.name, amount: form.value.amount});
  }

}
