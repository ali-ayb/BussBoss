<?php

namespace App\Http\Middleware;

use App\Models\Drivers_info;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthorizeDriver
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        $driver = Drivers_info::where('driver_id', $user->id)
            ->first();

        if ($user->user_type == "driver" and $driver->is_approved == 1) {
            return $next($request);
        }
        return response()->json([
            "message" => 'not authorized driver'
        ]);
    }
}
