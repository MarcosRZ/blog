import { cookies } from 'next/headers'
import Categories from '@blog/components/category/Categories'
import React from 'react'
import MDXWrapper from '@blog/components/MDX/MDXWrapper';
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from 'remark-gfm';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';


const Post = async (props: any) => {

  const { params: { slug } } = props;

  const supabase = createServerComponentClient({ cookies });

  const { data: post } = await supabase.from('posts').select().match({ slug }).single();

  if (!post) return <h1>Oops! 404 here</h1>

  const source = await serialize(post.content, {mdxOptions: {
    remarkPlugins: [remarkGfm]
  }});

  return (
    <div>
      <h1>{post!.title}</h1>
      <MDXWrapper source={source} />
      <Categories />
    </div>
  )
}

export default Post;