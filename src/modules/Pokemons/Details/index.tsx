import { useEffect, useState } from 'react';

import { fetchOne as apiFetchPokemon } from 'api/pokemon';

import Pokemon from 'components/Pokemon';

type Props = {
  name?: string;
};

export default function PokemonDetails({ name }: Props) {
  const [isValidPokemon, setIsValidPokemon] = useState(!name);
  const [avatar, setAvatar] = useState();
  const [weight, setWeight] = useState(null);
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    if (!name) return;

    (async () => {
      const _pokemon: any = await apiFetchPokemon(name);
      setIsValidPokemon(!!_pokemon);

      // weight
      setWeight(_pokemon.weight || null);

      // avatar
      const _avatar = _pokemon.sprites.front_default;
      setAvatar(_avatar);

      //abilities
      const _abilities = _pokemon.abilities
        .map((obj: any) => obj.ability)
        .map((obj: any) => obj.name);
      setAbilities(_abilities);

      // moves
      const _moves = _pokemon.moves
        .map((obj: any) => obj.move)
        .map((obj: any) => obj.name);
      setMoves(_moves);
    })();
  }, [name]);

  if (!name || !isValidPokemon) return <div>No Pokémon in the area.</div>;

  return (
    <Pokemon
      name={name}
      avatar={avatar}
      weight={weight}
      abilities={abilities}
      moves={moves}
    />
  );
}
