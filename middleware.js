import { NextResponse } from "next/server";

export function middleware(request) {
    const response = NextResponse.next();

    // Добавляем заголовок X-Frame-Options для защиты от атак через фреймы
    response.headers.set("X-Frame-Options", "DENY");

    // Добавляем заголовок Referrer-Policy для защиты данных реферера
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

    // Добавляем заголовок Content-Security-Policy для защиты от XSS-атак
    response.headers.set(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self'; style-src 'self';"
    );

    return response;
}
