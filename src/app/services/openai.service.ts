import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  constructor(
    private api: HttpClient
  ) { }

  getExampleRecipe(){
    return this.api.get('https://recipe-generator-api.onrender.com/example-recipe');
  }
}
