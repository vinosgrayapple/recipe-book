import { ShoppingListAddComponent } from './shopping-list-add.component';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives:[ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
