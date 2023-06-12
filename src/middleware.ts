import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse, NextRequest } from 'next/server'

const routeGuards = [
  { segment: '/admin', accessLevels: ['admin'] },
  // { segment: '/post', accessLevels: ['post'] }
]

const redirectTo = '/login'

// this middleware refreshes the user's session and must be run
// for any Server Component route that uses `createServerComponentSupabaseClient`
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;

  const routeGuard = routeGuards.find(g => pathname.startsWith(g.segment));

  if (!routeGuard) return res;
  if (!routeGuard.accessLevels) return res;
  if (routeGuard.accessLevels.length === 0) return res;

  const userAccessLevels = session?.user?.app_metadata?.access_levels;
  
  if (!hasRequiredLevels(userAccessLevels, routeGuard.accessLevels)) {

    // Auth condition not met, redirect to home page.
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = redirectTo;
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

const hasRequiredLevels = (userLevels: string[], requiredLevels: string[]) => {

  if (!userLevels || userLevels.length === 0) return false;

  // ADMIN BYPASS - If user has admin level, return true directly.
  if (userLevels.find(x => x === 'admin')) return true;

  if (requiredLevels.length === 0) return true;

  return requiredLevels.every(ral => userLevels.some((ual: string) => ral === ual));
};