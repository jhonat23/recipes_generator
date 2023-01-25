import { Component, OnInit } from '@angular/core';

import { OpenaiService } from '../app/services/openai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'recipes_generator';
  menuDisabled: boolean = true;
  example_recipe: any;

  constructor(
    private fastapi: OpenaiService
  ) {

  }

  ngOnInit(): void {

  }

  obtainExampleRecipe() {
    this.fastapi.getExampleRecipe().subscribe(data => {
      console.log(data);
    })
  }

}
