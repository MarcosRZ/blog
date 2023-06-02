import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import JSONBox from '@blog/components/JSONBox/JSONBox';

export default async function Admin() {

  const supabase = createServerComponentClient({ cookies });
  const session = await supabase.auth.getSession();

  return (
    <>
      <h1>Admin / Posts</h1>
      <JSONBox>{JSON.stringify(session, null, 2)}</JSONBox>
    </>
  )
}