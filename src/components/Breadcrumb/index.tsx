import { Link } from 'react-router-dom';

import { Container, Route } from './styled';

type Props = {
  root: string;
  currentPage: string;
};

export default function Breadcrumb({ root = 'Home', currentPage }: Props) {
  return (
    <Container>
      <Route>
        <Link to="/">{root}</Link>
      </Route>
      <Route>{currentPage}</Route>
    </Container>
  );
}
