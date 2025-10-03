import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  
  const pathname = request.nextUrl.pathname

  const sessionToken = request.cookies.get('better-auth.session_token')

  const hasSession = !!sessionToken?.value
  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register')
  const isProtectedPage = pathname.startsWith('/dashboard') 

  if (!hasSession && isProtectedPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (hasSession && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [ '/dashboard/:path*', '/login', '/register']
}
