import tw from 'tailwind-styled-components';
import RecordCard from '../../../components/Cards/RecordCard';

type RecordProps = {
  id: string;
}

export const RecordComponent = tw.article`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  h-screen
  max-md:grid-cols-1
  max-lg:grid-cols-2
  max-xl:grid-cols-3
  max-2xl:grid-cols-4
`;

function Record({ id }: RecordProps) {
  return (
    <RecordComponent id={id}>
      <RecordCard />
      <RecordCard />
      <RecordCard />
      <RecordCard />
    </RecordComponent>
  );
}

export default Record;