import { useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { getCharacterById } from '../api/rmAPI';

export default function CharacterDetailPage() {
  const { characterId } = useParams({ from: '/character/$characterId' });
  const id = Number(characterId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['character', id],
    queryFn: () => getCharacterById(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error fetching character.</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} width={200} />
      <ul>
        <li>Status: {data.status}</li>
        <li>Species: {data.species}</li>
        <li>Gender: {data.gender}</li>
        <li>Origin: {data.origin.name}</li>
        <li>Location: {data.location.name}</li>
      </ul>
    </div>
  );
}
