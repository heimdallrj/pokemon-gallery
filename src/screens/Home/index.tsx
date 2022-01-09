import { useNavigate } from 'react-router-dom';

import AppLayout from 'layouts/AppLayout';
import Pokemons from 'modules/Pokemons';

// @NOTE:
// The idea is maintaining routes related stuff in screens/*
// and business logics under modules
export default function Home() {
  const navigate = useNavigate();

  const handleSelectPokmon = (name: string) => navigate(`/pokemon/${name}`);

  return (
    <AppLayout>
      <Pokemons onSelect={handleSelectPokmon} />
    </AppLayout>
  );
}
