import { useParams } from 'react-router-dom';

import AppLayout from 'layouts/AppLayout';
import PokemonDetails from 'modules/Pokemons/Details';

export default function Pokemon() {
  const { name } = useParams();

  return (
    <AppLayout page={name}>
      <PokemonDetails name={name} />
    </AppLayout>
  );
}
