import { NextResponse } from "next/server";

export function middleware(request) {
    const response = NextResponse.next();

    // Добавляем заголовок X-Frame-Options для защиты от атак через фреймы
    response.headers.set("X-Frame-Options", "DENY");

    // Добавляем заголовок Referrer-Policy для защиты данных реферера
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

    // Минимальная Content-Security-Policy, разрешающая только ресурсы с того же домена
    response.headers.set(
        "Content-Security-Policy",
        `default-src 'self'; 
        script-src 'self'; 
        style-src 'self'; 
        img-src 'self'; 
        font-src 'self';`
    );

    // Добавляем заголовок X-Content-Type-Options для защиты от sniffing атак
    response.headers.set("X-Content-Type-Options", "nosniff");

    return response;
}
