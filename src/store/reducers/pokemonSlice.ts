import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { fetchAll as apiFetchAll } from 'api/pokemon';

type InitialState = {
  data: any[];
  isFetching: boolean;
  error: null | string;
};

const initialState: InitialState = {
  data: [],
  isFetching: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.isFetching = true;
    },
    fetched(state, { payload }) {
      state.data = payload;
      state.isFetching = false;
      state.error = null;
    },
    failed(state, { payload }) {
      state.error = payload;
      state.isFetching = false;
    },
  },
});

export const { fetching, fetched, failed } = pokemonSlice.actions;

export const fetchAll = () => async (dispatch: Dispatch) => {
  dispatch(fetching());
  try {
    const pokemons = await apiFetchAll();
    dispatch(fetched(pokemons));
  } catch (err) {
    dispatch(failed((err as Error).message));
  }
};

export default pokemonSlice.reducer;
