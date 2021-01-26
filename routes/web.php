<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'store'])
    ->middleware('guest');

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
