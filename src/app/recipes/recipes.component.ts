import { Recipe } from './recipe';
import { RecipeDetailComponent } from './recipe-detail';
import { Component, OnInit } from '@angular/core';
import  { RecipeListComponent } from './recipe-list'
@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent, RecipeDetailComponent]
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {
  }

}
