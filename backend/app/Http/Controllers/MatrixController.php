<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Matrix;

class MatrixController extends Controller
{
    
    public function store(Request $request){

        $rules = array(
            'row' => 'required',
            'column' => 'required',
            'matrix_request' => 'required',
        );

        $messages = array(
            'row.required' => 'row is required',
            'column.required' => 'column is required',
            'matrix_request.required' => 'the matrix request is required',
        );

        $validator = Validator::make($request->all(), $rules, $messages);

        if($validator->fails()){
            return response()->json([
                'message' => $validator->errors()->first()
            ],400);
        }

        try {
            $matrix = Matrix::create($request->all());
            return response()->json([
                'Message' => 'Created matrix successfully'
            ],201);
        } catch (\Throwable $th) {
            return response()->json([
                'Message' => 'Error, something went wrong' . $th
            ],400);
        }
    }

    public function show(Request $request){
        $id = $request->route('id');
        $matrix = Matrix::find($id);
       
        return response()->json(compact('matrix'),200);
    }
}
