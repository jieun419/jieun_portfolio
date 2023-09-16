import tw from 'tailwind-styled-components';
import RecordCard from '../../../components/Cards/RecordCard';
import { TabsPropsT } from '../../../types/type';
import { recordData } from '../../../data/content/recordData';

export const RecordComponent = tw.article`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  h-screen
  pt-[3rem]
  mt-[3rem]
  max-2xl:h-screen
  max-lg:h-auto
  max-md:grid-cols-1
  max-lg:grid-cols-2
  max-xl:grid-cols-3
  max-2xl:grid-cols-4
`;

function Record({ id, navTabs }: TabsPropsT) {
  return (
    <RecordComponent id={id} ref={navTabs[1].targetRef}>
      {
        recordData.map((item, idx) => (
          <RecordCard
            key={idx}
            data={item.data}
            title={item.title}
            role={item.role}
            infos={item.infos}
            stacks={item.stacks}
          />
        ))
      }
    </RecordComponent>
  );
}

export default Record;