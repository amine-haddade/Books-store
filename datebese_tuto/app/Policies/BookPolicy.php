<?php

namespace App\Policies;

use App\Models\Book;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class BookPolicy
{
    public function checkrole(User $user):Response
    {   
        return $user->role=="admin" ?
        Response::allow():
        Response::deny('ne pas autoriser pourn faire ce étape');

    }
}
