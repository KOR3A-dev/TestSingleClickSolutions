<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matrix extends Model
{
    use HasFactory;

    public $fillable = [
        'row',
        'column',
        'matrix_request',
        'transposed'
    ];
}
