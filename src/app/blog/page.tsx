import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import { cookies } from 'next/headers';
import Link from 'next/link';

const Blog = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data: posts = [] } = await supabase.from('posts').select('id, slug, title');

  return (
    <>
      <h1>Publications</h1>
      <ul>
        {posts ? posts.map(post => <li key={post.id}><Link href={`/blog/${post.slug}`}>{post.title}</Link></li>) : <p>No posts yet...</p>}
      </ul>
    </>
  )
}

export default Blog