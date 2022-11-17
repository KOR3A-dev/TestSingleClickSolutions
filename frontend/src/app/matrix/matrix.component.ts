import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatrixService } from './services/matrix.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

  shouldRun: any
  table: any

  matrixForm = new FormGroup({
    row: new FormControl('',{
      validators: [
         Validators.max(99999999),
         Validators.min(0),
         Validators.required,
       ],
    }),
    column: new FormControl('', {
      validators: [
         Validators.max(99999999),
         Validators.min(0),
         Validators.required,
       ],
    }),
    matrix_request : new FormControl('')
  })

  tableTransposed =
    '<table style="border: 1px solid; width: 50%">' +
      '<tr style="border: 1px solid">' +

        '<td style="border: 1px solid">' +
          '2' +
        '</td>' +

        '<td style="border: 1px solid">' +
         '4' +
        '</td>' +

        '<td style="border: 1px solid">' +
         '4' +
        '</td>' +

      '</tr>' +

      '<tr style="border: 1px solid">' +

        '<td style="border: 1px solid">' +
          '4' +
        '</td>' +

        '<td style="border: 1px solid">' +
          '4' +
        '</td>' +

        '<td style="border: 1px solid">' +
          '4' +
        '</td>' +

      '</tr>' +

    '</table>'


  constructor(
    private matrixService:MatrixService
  ) { }

  ngOnInit(): void {
  }

  generateMatrix(row: number, column: number){
    console.log(row, column)
    console.log(this.matrixForm.value.matrix_request);


    this.table =
    '<table style="border: 1px solid; width: 50%">' +
      '<tr style="border: 1px solid">' +

        '<td style="border: 1px solid">' +
          '<input style="width: 100%" matInput type="number" id="row" formControlName="row">' +
        '</td>' +

        '<td style="border: 1px solid">' +
         '<input style="width: 100%" matInput type="number" id="row" formControlName="row">' +
        '</td>' +

        '<td style="border: 1px solid">' +
         '<input style="width: 100%" matInput type="number" id="row" formControlName="row">' +
        '</td>' +

      '</tr>' +

      '<tr style="border: 1px solid">' +

        '<td style="border: 1px solid">' +
          '<input style="width: 100%" matInput type="number" id="row" formControlName="row">' +
        '</td>' +

        '<td style="border: 1px solid">' +
          '<input style="width: 100%" matInput type="number" id="row" formControlName="row">' +
        '</td>' +

        '<td style="border: 1px solid">' +
          '<input style="width: 100%" matInput type="number" id="row" formControlName="row">' +
        '</td>' +

      '</tr>' +

    '</table>'
  }

}
