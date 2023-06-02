"use client";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

interface MDXWrapperProps {
  source: MDXRemoteProps;
}

export default function MDXWrapper({ source }: MDXWrapperProps) {
  return <MDXRemote {...source} />;
}