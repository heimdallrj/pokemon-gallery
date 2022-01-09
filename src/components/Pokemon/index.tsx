import { Container, Title, Details, Row, Attr, Avatar } from './styled';

type Props = {
  name: string;
  avatar?: string;
  weight?: null | string;
  abilities?: string[];
  moves?: string[];
};

export default function Pokemon({
  name,
  avatar,
  weight = null,
  abilities = [],
  moves = [],
}: Props) {
  return (
    <Container>
      <Title>{name}</Title>

      {avatar && <Avatar src={avatar} alt={name} />}

      <Details>
        {weight && (
          <Row>
            <Attr>Weight:</Attr> {weight}
          </Row>
        )}
        {abilities.length > 0 && (
          <Row>
            <Attr>Abilities:</Attr> {abilities.join(', ')}
          </Row>
        )}
        {moves.length > 0 && (
          <Row>
            <Attr>Moves:</Attr> {moves.join(', ')}
          </Row>
        )}
      </Details>
    </Container>
  );
}
