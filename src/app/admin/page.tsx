import React, { Suspense } from 'react'
import { Button } from '@blog/components/button/Button';
import Link from 'next/link';
import { Controls } from './components/Controls';
import PostListFeed from './components/PostListFeed';
import Spinner from '../../components/spinner/Spinner';

export default async function Admin() {

  return (
    <>
      <h1>Admin</h1>
      <Suspense fallback={<Spinner />}>
        <PostListFeed />
      </Suspense>
      <Controls>
        <Link href={`/admin/posts/create`}><Button>+ Create</Button></Link>
      </Controls>
    </>
  )
  }
