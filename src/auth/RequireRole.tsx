import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";

const RequireRole =  async ({ children, role }: { children: React.ReactNode, role: string }) => {

  const client = createServerComponentClient({ cookies })

  const session = await client.auth.getSession();

  return (
    <>
      <div>RequireRole</div>
      <p>{JSON.stringify(session)}</p>
    </>
  )
}

export default RequireRole