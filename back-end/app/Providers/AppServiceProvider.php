<?php

namespace App\Providers;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    

public function boot()
{
    Gate::define('checkrole', function ($user) {
        return $user->role === 'admin'; // Permet l'accès seulement si le rôle est "admin"
    });
}
}
