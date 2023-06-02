import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
// import type { Database } from '@/lib/database.types'

// export async function middleware(req: NextRequest) {

//   console.log('@@@ MIDDLEWARE RAN!');

//   const res = NextResponse.next()
//   const supabase = createMiddlewareClient({ req, res })
//   await supabase.auth.getSession()
//   return res
// }

// import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

const protectedRoutes = [
  '/admin'
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

  if (protectedRoutes.some(pr => req.nextUrl.pathname.startsWith(pr))) {

    if (req.nextUrl.pathname.includes('admin')){
      const hasAdminLevel = session?.user?.app_metadata?.access?.level === 'admin';
     
      if (!hasAdminLevel) {

        // Auth condition not met, redirect to home page.
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = redirectTo;
        redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl);
      }
    }
  }

  return res;
}