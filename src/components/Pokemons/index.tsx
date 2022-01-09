import Favourite from 'components/Favourite';
import { IPokemon } from 'types';

import { Conatiner, Pokemon } from './styled';

type Props = {
  isLoading?: boolean;
  pokemons: IPokemon[];
  favourites: string[];
  onFavourite: (name: string) => void;
  onSelect: (name: string) => void;
};

export default function Pokemons({
  isLoading = true,
  pokemons = [],
  favourites = [],
  onFavourite,
  onSelect,
}: Props) {
  return (
    <>
      {!isLoading && pokemons.length === 0 && (
        <div>No Pokémon in the area.</div>
      )}
      <Conatiner>
        {pokemons.map(({ name }: { name: string }) => (
          <Pokemon key={name}>
            <Favourite
              liked={favourites.includes(name)}
              onClick={() => onFavourite(name)}
            />
            <p onClick={() => onSelect(name)}>{name}</p>
          </Pokemon>
        ))}
      </Conatiner>
    </>
  );
}
