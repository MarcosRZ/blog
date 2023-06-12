'use client'
import { styled } from "styled-components";

export const Photo = styled.div`
  background-color: white;
  border: 5px solid white;
  border-bottom: 40px solid white;
  box-shadow: 0 0 20px black;
  transform: rotate(5deg);
  /* transition: all 2s ease; */
`;

export const Profile = styled.div`
`;

export const ProfileName = styled.p`
  text-align: left !important;
  font-size: var(--font-3xl);
  font-weight: bold;
  margin: 0 auto;
`;

export const ProfileTitle = styled.p`
  text-align: left !important;
  font-size: var(--font-l);
  font-weight: bold;
  color: var(--gray-2);
`;

export const ContactNetworks = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

export const ContactNetwork = styled.div`
  display: flex;
  flex-direction: row;
  gap: .5rem;
  align-items: center;
  font-size: var(--font-s);
`;

export const ProfileLocation = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: var(--font-m);
  margin-bottom: 2rem;
`;