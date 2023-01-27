import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
params: HttpParams = new HttpParams();

  constructor(
    private api: HttpClient
  ) { }

  getExampleRecipe(){
    return this.api.get('https://recipe-generator-api.onrender.com/example-recipe');
  }

  getRecipe(recipe: string) {
    this.params = this.params.append('recipe', recipe);
    return this.api.post('https://recipe-generator-api.onrender.com/recipe', this.params, {headers: this.headers});
  }
}
