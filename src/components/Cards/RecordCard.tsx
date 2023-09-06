import tw from 'tailwind-styled-components';
import StackIcon from '../atoms/tools/ToolIcon';

export const CardContainer = tw.section`
  overflow-hidden
  flex
  flex-col
  rounded
  bg-[#373737]
  relative
  
  justify-between
  group
`;

export const TxtWrap = tw.div`
  p-5
  flex
  flex-col
  gap-3
  text-[#fff]
`;

export const Tit = tw.h4`
  font-bold
  text-2xl
`;

export const Txt = tw.p`
  text-base
  text-[#A6A6A6]
`;

export const Tags = tw.div`
  p-5
  flex
  gap-1
`;

function RecordCard() {
  return (
    <CardContainer>
      <TxtWrap>
        <span>2023.03 - 2023.08</span>
        <Tit>코드스테이츠 프론트엔드 과정 수료</Tit>
        <Txt>
          <ul>
            <li>JavaScript, React 학습</li>
            <li>20주 동안 매일 강도 높은 과제 수행 및
              페어 프로그래밍과 코드 리뷰 경험</li>
            <li>솔로 프로젝트 1회, 협업 프로젝트 2회 진행</li>
            <li>스터디에 참여하여 개발 공부를 진행하고
              동료들과 원활한 소통과 커뮤니케이션을 촉진</li>
          </ul>
        </Txt>
      </TxtWrap>
      <Tags>
        <StackIcon stack={'html'} />
        <StackIcon stack={'css'} />
        <StackIcon stack={'ps'} />
        <StackIcon stack={'ai'} />
      </Tags>
    </CardContainer>
  );
}

export default RecordCard;