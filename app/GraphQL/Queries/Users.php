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
        return User::where('first_name', 'like', "{$args['searchKey']}%")
            ->orWhere('last_name', 'like', "{$args['searchKey']}%")
            ->limit($args['limit'])
            ->get();


    }
}
