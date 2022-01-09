import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Pokemon from './index';

const pokemon = {
  name: 'venonat',
  avatar:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
  weight: '18',
  abilities: ['a', 'b', 'c'],
  moves: ['x', 'y'],
};

describe('Components - Pokemon', () => {
  test('renders when only name has provided', () => {
    const component = <Pokemon name={pokemon.name} />;
    render(component);

    expect(screen.getByText(/venonat/i)).toBeInTheDocument();

    // Snapshot
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders when all the props has provided', () => {
    const component = (
      <Pokemon
        name={pokemon.name}
        avatar={pokemon.avatar}
        weight={pokemon.weight}
        abilities={pokemon.abilities}
        moves={pokemon.moves}
      />
    );
    render(component);

    expect(screen.getByText(/venonat/i)).toBeInTheDocument();
    expect(screen.getByText(/Weight:/i)).toBeInTheDocument();
    expect(screen.getByText(/Abilities:/i)).toBeInTheDocument();
    expect(screen.getByText(/Moves:/i)).toBeInTheDocument();

    // Snapshot
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
