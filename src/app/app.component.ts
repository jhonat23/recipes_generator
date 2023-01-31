import { Component, OnInit } from '@angular/core';

import { OpenaiService } from '../app/services/openai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'recipes_generator';

  constructor(
    private fastapi: OpenaiService
  ) {}

  menuDisabled: boolean = true;
  example_recipe: any;
  recipe: any = '\u{1F9C6}';
  ingredients: any;
  temp: any;


  ngOnInit(): void {
    this.fastapi.getExampleRecipe().subscribe(data => {
      console.log(data);
      this.example_recipe = data;
    })
  }

  obtainExampleRecipe() {
    console.log(this.recipe);
    console.log(this.ingredients);
  }

  obtainRecipe() {
    this.fastapi.getRecipe(this.ingredients).subscribe(data => {
      console.log(data);
      this.temp = data;
      this.recipe = this.temp.instructions;
    })
  }

}
