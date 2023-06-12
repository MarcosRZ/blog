import Link from 'next/link';
import React from 'react'
import { Button } from '../button/Button';
import { PostControls, PostRowHeader, PostRowWrapper } from './styled';
import { FaTrash, FaPen, FaEye } from 'react-icons/fa';
interface PostRowProps {
  post: any;
}

const PostRow = ({ post }: PostRowProps) => <>

  <PostRowWrapper>
    <PostRowHeader>
      <Link href={`/blog/${post.slug}`} target={'_blank'}><h2>{post.title}</h2></Link>

      <PostControls>
        <Link href={`/blog/${post.slug}`}><Button><FaEye /></Button></Link>
        <Link href={`/blog/${post.slug}`}><Button><FaPen /></Button></Link>
        <Link href={`/blog/${post.slug}`}><Button variant="danger"><FaTrash /></Button></Link>
      </PostControls>
    </PostRowHeader>

    <div>
      <p>{post.content}</p>
      <span>{post.date}</span>
    </div>
  </PostRowWrapper>
  </>;

export default PostRow;
