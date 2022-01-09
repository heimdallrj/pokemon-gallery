import { useEffect, useState } from 'react';

import usePokemons from 'hooks/usePokemons';

import PokemonsList from 'components/Pokemons';
import Spinner from 'components/Spinner';

import {
  Container,
  Error,
  SpinnerWrapper,
  LoadMoreWrapper,
  LoadMoreBtn,
} from './styled';

const LIMIT = 50;
const lsFavKey = '__favourites';

type Props = {
  onSelect: (name: string) => void;
};

export default function Pokemons({ onSelect }: Props) {
  const [offset, setOffset] = useState(0);
  const [favourites, setFavourites] = useState<string[]>([]);

  const {
    data: pokemons,
    loadMore,
    isLoading,
    error,
  } = usePokemons({ offset, limit: LIMIT });

  useEffect(() => {
    // Fetch favourites from localStorage
    const _favourites = window.localStorage.getItem(lsFavKey);
    if (_favourites) {
      const _favouritesParsed = JSON.parse(_favourites);
      setFavourites(_favouritesParsed);
    }
  }, []);

  const handleFavourite = (name: string) => {
    if (!favourites.includes(name)) {
      setFavourites((prevState: string[]) => [...prevState, name]);
    } else {
      // un-Like
      const _favourites = favourites.filter((f) => f !== name);
      setFavourites(_favourites);
    }

    // Sync with localStorage
    window.localStorage.setItem(lsFavKey, JSON.stringify(favourites));
  };

  const handleLoadMore = () => {
    setOffset(offset + LIMIT);
  };

  return (
    <Container>
      <PokemonsList
        isLoading={isLoading}
        pokemons={pokemons}
        favourites={favourites}
        onFavourite={handleFavourite}
        onSelect={onSelect}
      />

      {error && <Error>Oops! something went wrong</Error>}

      {isLoading && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}

      {loadMore && (
        <LoadMoreWrapper>
          <LoadMoreBtn onClick={handleLoadMore}>
            Click here to load more &#8595;
          </LoadMoreBtn>
        </LoadMoreWrapper>
      )}
    </Container>
  );
}
