import React from 'react'
import PostList from './PostList'
import PostRow from '@blog/components/postRow/PostRow';
import { getPosts } from '../../../service/admin.service';

const fakeContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo blandit libero sed malesuada. Nunc elit quam, iaculis a commodo non, vehicula quis mi. Morbi purus eros, pulvinar vel eros eget, volutpat facilisis metus. Morbi pharetra sapien sit amet purus vehicula, non bibendum velit varius. Proin elementum ut dolor eget ultricies. Integer risus leo, rhoncus ultricies molestie consequat, vulputate quis lacus. Mauris in odio vitae purus vulputate placerat. Donec id pharetra mauris. Sed malesuada est in ipsum dignissim, vel sagittis ligula tristique. Praesent est nibh, rhoncus sit amet enim in, sodales pharetra tellus. Sed consequat, libero at mollis dapibus, leo elit euismod dui, sed porta risus enim non augue. Pellentesque venenatis vitae odio a tincidunt. Proin sed pharetra magna. Nam eget luctus massa.`;

export default async function PostListFeed() {

  const posts = await getPosts().then(posts => posts?.map(p => ({ ...p, content: fakeContent })));

  return <PostList>{posts?.map(post => <PostRow key={post.id} post={post}/>)}</PostList>
}