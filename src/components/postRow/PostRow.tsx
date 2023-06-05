'use client'

import Link from 'next/link';
import React from 'react'
import { styled } from 'styled-components';
import { Button } from '../button/Button';

interface PostRowProps {
  post: any;
}

const PostRow = ({ post }: PostRowProps) => 
  <PostRowWrapper>
    <div>
      <Link href={`/post/${post.slug}`} target={'_blank'}><h2>{post.title}</h2></Link>
      <span>{post.date}</span>
    </div>
    <PostControls>
      <Link href={`/post/${post.slug}`}><Button>Edit</Button></Link>
      <Link href={`/post/${post.slug}`}><Button>Delete</Button></Link>
    </PostControls>
  </PostRowWrapper>

export default PostRow;

const PostRowWrapper = styled.div`
  border: 2px solid #35c495;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  h2 {
    margin-top: 0;
  }
`;

const PostControls = styled.div`
  display: flex;
  gap: .25rem;
  align-items: center;
`