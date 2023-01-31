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
    return this.api.get('https://recipe-gen-api.onrender.com/example-recipe');
  }

  getRecipe(ingredients: string) {
    this.params = this.params.append('ingredients', ingredients);
    return this.api.post('https://recipe-gen-api.onrender.com/user-recipe', this.params, {headers: this.headers});
  }
}
