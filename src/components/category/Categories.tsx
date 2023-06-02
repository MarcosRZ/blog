'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react'

const Categories = () => {
  return (
    <CategoryListWrapper>      
      <CategoryListItem href={'/#'}>#Category1</CategoryListItem>
      <CategoryListItem href={'/#'}>#Category2</CategoryListItem>
      <CategoryListItem href={'/#'}>#Category3</CategoryListItem>
      <CategoryListItem href={'/#'}>#Category4</CategoryListItem>
      <CategoryListItem href={'/#'}>#Category5</CategoryListItem>
    </CategoryListWrapper>
  )
}

export default Categories;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: .25rem;
  padding: .25rem 0;
  margin: 1rem 0;
  justify-content: left;
`;

const CategoryListItem = styled(Link)`
  padding: .25rem;
`;