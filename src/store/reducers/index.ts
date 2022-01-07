import { combineReducers } from 'redux';

import pokemonSlice from './pokemonSlice';

export default combineReducers({
  pokemons: pokemonSlice,
});
