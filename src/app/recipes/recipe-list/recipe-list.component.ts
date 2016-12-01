import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
  
import { Recipe } from '../recipe'
import { RecipeItemComponent } from './recipe-item.component'
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Картофель, запеченный в мундире','Ароматный домашний картофель.','http://s1.afisha-eda.ru/StaticContent/Photos/120214125956/120214130233/p_O.jpg');
  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
