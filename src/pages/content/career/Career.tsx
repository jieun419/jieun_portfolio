import tw from 'tailwind-styled-components';
import RecordCard from '../../../components/cards/RecordCard';
import { TabsPropsT } from '../../../types/type';
import { careerData } from '../../../data/content/careerData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import ScrollAni from '../../../styles/ScrollAni';


export const RecordComponent = tw.article`
  grid
  grid-cols-2
  grid-row-3
  gap-4
  pt-[3rem]
  mt-[3rem]
  
  max-md:pt-[5rem]
  max-lg:h-auto
  max-lg:grid-cols-1
  max-xl:grid-cols-2  
  max-2xl:h-screen
`;

const Career = ({ id, navTabs }: TabsPropsT) => {
  const { scrollRef, scrollEl } = useScrollAnimation();

  return (
    <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'} mdH`} ref={scrollRef}>
      <RecordComponent id={id} ref={navTabs[0].targetRef}>
        {
          careerData.map((item, idx) => (
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
};

export default Career;