'use client'

import styled from '@emotion/styled';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '../../components/button/Button';
import TextInput from '../../components/Input/TextInput';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type LoginState = { 
  email: string,
  password:string,
}

const Login = () => {

  const params = useSearchParams();

  const redirectedFrom = params.get('redirectedFrom');

  const supabase = createClientComponentClient();
  
  const router = useRouter();

  const [credentials, setCredentials] = useState<LoginState>({ email: "", password: "" });

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      ...credentials,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword(credentials)
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const login = async () => {
    await supabase.auth.signInWithPassword(credentials);
    const redirectURI = redirectedFrom || '/';
    router.push(redirectURI);
  }

  return (
    <>
      <FormWrapper>
        <h1>Authorization</h1>
        <label htmlFor="email">Email</label>
        <TextInput id="email" type="email" name="email" onChange={update} placeholder="Email" />
        <label htmlFor="email">Password</label>
        <TextInput id="password" type="password" name="password" onChange={update} placeholder="Password" />
        <Button onClick={login}>Login</Button>
        <p>1290sj908hj12w@yopmail.com | aaaaaa</p>
      </FormWrapper>
    </>
  )
}

export default Login;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  gap: .5rem;
`;