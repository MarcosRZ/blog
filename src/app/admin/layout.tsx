import React from 'react'

const Layout = async ({
  children,
}: {
  children: React.ReactNode
}) => <>
    <div>Whatever that should be in admin layout</div>
    <div>{children}</div>
  </>

export default Layout