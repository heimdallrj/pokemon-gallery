import React from 'react';

import Breadcrumb from 'components/Breadcrumb';

import { Container, Main } from './styled';

type Props = {
  page?: string;
  children: React.ReactNode;
};

export default function AppLayout({ page, children }: Props) {
  return (
    <Container>
      <h1>Pokémon Gallery</h1>

      <Main>
        {page && <Breadcrumb root="Pokémon" currentPage={page} />}

        <div>{children}</div>
      </Main>
    </Container>
  );
}
