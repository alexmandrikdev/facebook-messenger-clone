<?php

namespace App\GraphQL\Queries;

use App\Models\User;

class Users
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return User::whereRaw("CONCAT(first_name, ' ', last_name) LIKE '%{$args['searchKey']}%'")
            ->get();


    }
}
