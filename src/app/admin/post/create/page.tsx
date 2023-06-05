'use client'
import TextInput from '@blog/components/Input/TextInput'
import FormRow from '@blog/components/form/FormRow'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const CreatePage = () => {

  const supabase = createClientComponentClient();
  const [user, setUser] = useState<string | undefined>('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data: {user: u} }) => setUser(u?.email || ''));
  }, []);

  return (
    <CreateForm>
      <h1>New Post</h1>
      <FormRow>
        <span>Authoring as  <b>{user}</b></span>
      </FormRow>
      <FormRow>
        <label htmlFor='title'>Title</label>
        <TextInput name={'title'} placeholder={'Title'}/>
      </FormRow>
      <FormRow>
        <label htmlFor='image'>Image Url</label>
        <TextInput name={'image'} placeholder={'Image url'}/>
      </FormRow>
      <FormRow>
        <label htmlFor='slug'>Slug</label>
        <TextInput name={'slug'} placeholder={'Slug'}/>
      </FormRow>
      <FormRow>
        <label htmlFor="content">Content</label>
        <textarea name={'content'}></textarea>
      </FormRow>
    </CreateForm>
  )
}

export default CreatePage

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
`;