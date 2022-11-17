import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  readonly API_URL = environment.baseUrl;

  constructor(
    private http:HttpClient
  ) { }

  createMatrix(row: Number, column: Number, matrix_request: JSON){
    let data = { row:row, column:column, matrix_request: matrix_request};
    return this.http.post(`${this.API_URL}matrix/create`, data);
  }

  getMatrix(id: Number){
    return this.http.get(`${this.API_URL}matrix/${id}`);
  }
}
