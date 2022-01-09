import { useEffect, useState } from 'react';

import { IPokemon } from 'types';

import { fetch as apiFetchPokemons } from 'api/pokemon';
import { unique } from 'utils/array';

// @TODO: Persists previous state throughout application life-cycle

type Props = {
  offset?: number;
  limit?: number;
};

const usePokemons = ({ offset = 0, limit = 50 }: Props) => {
  const [data, setData] = useState<IPokemon[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { results, count }: any = await apiFetchPokemons(offset, limit);

        setData((prevState: any) => unique([...prevState, ...results], 'name'));
        setLoadMore(data.length !== count);
      } catch (err) {
        setError((err as any).message);
      }
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, limit]);

  return { data, error, isLoading, loadMore };
};

export default usePokemons;
