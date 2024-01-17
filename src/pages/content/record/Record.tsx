import tw from 'tailwind-styled-components';
import RecordCard from '../../../components/cards/RecordCard';
import { TabsPropsT } from '../../../types/type';
import { recordData } from '../../../data/content/recordData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import ScrollAni from '../../../styles/ScrollAni';

export const RecordComponent = tw.article`
  grid
  grid-cols-4
  grid-row-3
  gap-4
  h-screen
  pt-[3rem]
  mt-[3rem]
    
  max-md:grid-cols-1
  max-md:pt-[5rem]
  max-lg:grid-cols-2
  max-lg:h-auto
  max-xl:grid-cols-3
  max-2xl:grid-cols-4
  max-2xl:h-screen
`;

function Record({ id, navTabs }: TabsPropsT) {
  const { scrollRef, scrollEl } = useScrollAnimation();
  return (
    <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
      <RecordComponent id={id} ref={navTabs[2].targetRef}>
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
    </ScrollAni>
  );
}

export default Record;