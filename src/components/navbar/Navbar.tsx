'use client'
import { useSessionSubscription } from '@blog/auth/SessionProvider';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
const Navbar = () => {

  const supabase = createClientComponentClient();
  const { session } = useSessionSubscription();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <NavbarWrapper>
      <NavbarContent>
        <NavbarLeft>
          <NavbarLinkItem href={'/'}>Home</NavbarLinkItem>
          <NavbarLinkItem href={'/categories'}>Categories</NavbarLinkItem>
          <NavbarLinkItem href={'/about'}>About</NavbarLinkItem>
          <NavbarLinkItem href={'/contact'}>Contact</NavbarLinkItem>
          {/* <NavbarLinkItem href={'/admin'}>Admin</NavbarLinkItem> */}
        </NavbarLeft>
        <NavbarRight>
          {
            session ? 
            <NavbarButtonItem onClick={handleSignOut}>{session.user.email} - Logout</NavbarButtonItem> :
            <NavbarLinkItem href={'/login'}>Log In</NavbarLinkItem>
          }
        </NavbarRight>
      </NavbarContent>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  background-color: #434343;
  color: white;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: .25rem;
  width: 100%;
  max-width: 1024px;
  margin: 0;
`;

const NavbarLeft = styled.div`
  display: flex;
  justify-content: left;
  gap: 1rem;
`;

const NavbarRight = styled.div`
  display: flex;
  justify-content: right;
  gap: 1rem;
`;

const NavbarLinkItem = styled(Link)`
  color: #DDD;
  font-size: large;
  cursor: pointer;
  padding: .5rem;
  border-bottom: 2px solid transparent;

  &:hover {
    color: aquamarine;
    border-bottom: 2px solid aquamarine;
  }
`;

const NavbarButtonItem = styled.button`
  border: none;
  background: none;
  color: #DDD;
  font-size: large;
  cursor: pointer;
  padding: .5rem;

  &:hover {
    color: aquamarine;
    border-bottom: 2px solid aquamarine;
  }
`;

export default Navbar