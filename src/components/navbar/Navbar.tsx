'use client'
import { useSessionSubscription } from '@blog/auth/SessionProvider';
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
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
          <NavbarLinkItem href={'/'}>
            <Image style={{borderRadius: '50%', border: '2px solid', boxShadow: '0 0 4px var(--primary-8)'}} height={60} width={60} src="/marcosrz.jpeg" alt="brand logo"/>
            <span>Marcos Rz.</span>
          </NavbarLinkItem>
          <NavbarLinkItem href={'/blog'}>Blog</NavbarLinkItem>
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
  font-weight: bold;
  position: fixed;
  top: 0;
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--gray-3);
  color: white;
  box-shadow: 0px 0px 5px var(--primary-8);
  z-index: 10;
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
  display: flex;
  gap: 1.5rem;
  align-items: center;
  color: #DDD;
  font-size: large;
  cursor: pointer;
  padding: .5rem;
  border-bottom: 2px solid transparent;

  transition: all .4s ease;

  &:hover {
    color: var(--primary-8);
    border-bottom: 2px solid var(--primary-8);
  }
`;

const NavbarButtonItem = styled.div`

    background-color: transparent;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    align-items: center;
    color: #DDD;
    font-size: large;
    cursor: pointer;
    padding: 0.5rem;
    transition: all .4s ease;
    border-bottom: 2px solid transparent;
    border-radius: none;

  &:hover {
    color: var(--primary-8);
    border-bottom: 2px solid var(--primary-8);
  }
`;

export default Navbar