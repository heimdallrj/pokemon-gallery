import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';

import Pokemons from './index';

const pokemons: any = [
  {
    name: 'venonat',
    url: 'url1',
  },
  {
    name: 'venusaur',
    url: 'url2',
  },
];

describe('Components - Pokemons', () => {
  test('renders when no data has provided', () => {
    const component = (
      <Pokemons
        isLoading={false}
        pokemons={[]}
        favourites={[]}
        onFavourite={() => {}}
        onSelect={() => {}}
      />
    );
    render(component);

    expect(screen.getByText(/No Pokémon in the area./i)).toBeInTheDocument();

    // Snapshot
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test.only('renders when data has provided', async () => {
    const handleFavourite = jest.fn();
    const handleSelect = jest.fn();

    const component = (
      <Pokemons
        isLoading={false}
        pokemons={pokemons}
        favourites={[]}
        onFavourite={handleFavourite}
        onSelect={handleSelect}
      />
    );
    render(component);

    expect(screen.getByText(/venonat/i)).toBeInTheDocument();
    expect(screen.getByText(/venusaur/i)).toBeInTheDocument();

    // screen.debug();

    fireEvent.click(screen.getByText(/venonat/i));
    expect(handleSelect).toHaveBeenCalledTimes(1);

    // eslint-disable-next-line testing-library/no-node-access
    const container: any = document.querySelector('svg')?.firstChild;
    fireEvent.click(container);
    expect(handleFavourite).toHaveBeenCalledTimes(1);

    // Snapshot
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
