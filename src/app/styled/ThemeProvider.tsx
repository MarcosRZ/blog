'use client'

import { ThemeProvider } from '@emotion/react'
import React, { PropsWithChildren } from 'react'
import theme from './theme'

const BlogThemeProvider = (props: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  )
}

export default BlogThemeProvider