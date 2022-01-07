import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div>
      <h1>Pokemon</h1>
      <div>{children}</div>
    </div>
  );
}
