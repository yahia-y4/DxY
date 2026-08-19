<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Doctor extends Model
{
    use HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

       protected $hidden = [
        'password',
        'remember_token',
    ];
}
