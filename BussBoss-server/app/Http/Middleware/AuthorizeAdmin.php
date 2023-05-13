<?php

namespace App\Http\Middleware;

use App\Models\Drivers_info;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthorizeAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        if ($user->user_type == "admin") {
            return $next($request);
        }
        return response()->json([
            "message" => 'not authorized admin'
        ]);
    }
}
