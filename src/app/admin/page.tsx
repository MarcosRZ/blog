'use client'
import React from 'react'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import PostRow from '@blog/components/postRow/PostRow';
import { styled } from 'styled-components';
import { Button } from '@blog/components/button/Button';
import Link from 'next/link';

export default async function Admin() {

  const supabase = createClientComponentClient();

  const { data: posts } = await supabase.from('posts').select();

  return (
    <>
      <h1>Admin / Posts</h1>
      <PostList>
        {posts?.map(post => <PostRow post={post}/>)}
      </PostList>
      <Controls>
        <Link href={`/admin/post/create`}><Button>+ Create</Button></Link>
      </Controls>
    </>
  )
}

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const Controls = styled.div`
  display: flex;
  gap: .25rem;
  padding:.5rem;
  justify-content: right;
`

