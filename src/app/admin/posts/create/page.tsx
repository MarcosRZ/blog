'use client'
import TextArea from '@blog/components/Input/TextArea'
import TextInput from '@blog/components/Input/TextInput'
import { Button } from '@blog/components/button/Button'
import FormRow from '@blog/components/form/FormRow'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

interface PostDTO {
  author?: string;
  title?: string;
  image?: string;
  slug?: string;
  content?: string;
}

const CreatePage = () => {

  const supabase = createClientComponentClient();
  const [user, setUser] = useState<string | undefined>('');
  const [post, setPost] = useState<PostDTO>({
    author: '',
    title: '',
    image: '',
    slug: '',
    content: '',
  });

  useEffect(() => {
    supabase.auth.getUser().then(({ data: {user: u} }) => {
      setUser(u?.email || '');
      setPost({
        ...post,
        author: u?.id || ''
      });
    });
  }, [supabase.auth]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  }

  const onCreate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(post);
    supabase.from('posts').upsert(post).then(d => alert(d));
  }

  return (
    <CreateForm onSubmit={onCreate}>
      <h1>New Post</h1>
      <FormRow>
        <span>Authoring as  <b>{user}</b></span>
      </FormRow>
      <FormRow>
        <label htmlFor='title'>Title</label>
        <TextInput onChange={onChange} name={'title'} placeholder={'Title'}/>
      </FormRow>
      <FormRow>
        <label htmlFor='image'>Image Url</label>
        <TextInput onChange={onChange} name={'image'} placeholder={'Image url'}/>
      </FormRow>
      <FormRow>
        <label htmlFor='slug'>Slug</label>
        <TextInput onChange={onChange} name={'slug'} placeholder={'Slug'}/>
      </FormRow>
      <FormRow>
        <label htmlFor="content">Content</label>
        <TextArea onChange={onChange} name={'content'} rows={20}></TextArea>
      </FormRow>
      <Controls>
        <Button onClick={() => console.log(post)}>Create</Button>
      </Controls>
    </CreateForm>
  )
}

export default CreatePage

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  padding: .5rem 0;
  display: flex;
  justify-content: center;
`;