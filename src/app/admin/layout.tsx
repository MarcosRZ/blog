import React, { PropsWithChildren } from 'react'

const Layout = async ({
  children,
}: PropsWithChildren) => <>
    <div>{children}</div>
  </>

export default Layout

