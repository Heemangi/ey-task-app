import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../api/rmAPI';
import CharacterTable from '../components/CharacterTable';
import { useSearch } from '@tanstack/react-router';
import type { CharacterAPIResponse } from '../types';

export default function CharacterListPage() {
  const search = useSearch({ from: '/' }) as { page?: string };
  const page = Number(search.page) || 1;

  const { data, isLoading, refetch, isError } = useQuery<CharacterAPIResponse>({
    queryKey: ['characters', page],
    queryFn: () => getCharacters(page),
    keepPreviousData: true,
  });

  const handlePageChange = (delta: number) => {
    const newPage = page + delta;
    if (newPage > 0) {
      window.history.pushState({}, '', `/?page=${newPage}`);
      window.location.reload();
    }
  };

  return (
    <div>
      <h2>Character List (Page {page})</h2>
      <button onClick={() => refetch()}> Refresh</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching characters.</p>}
      {data ? (
        <>
          <CharacterTable data={data.results} />
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => handlePageChange(-1)} disabled={!data.info.prev}>
               Previous
            </button>
            <button onClick={() => handlePageChange(1)} disabled={!data.info.next}>
              Next 
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
