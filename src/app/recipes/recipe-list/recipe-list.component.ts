import { Component, OnInit } from '@angular/core';
  
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
  recipe = new Recipe('Dummy','Dummy Description','http://rdfgroup.ru/upload/iblock/714/714f49ae6c8a3d879f157095fdda1f79.jpg');
  constructor() {}

  ngOnInit() {
  }

}
