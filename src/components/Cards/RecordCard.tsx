import tw from 'tailwind-styled-components';
import StackIcon from '../atoms/tools/ToolIcon';

export const CardContainer = tw.section`
  overflow-hidden
  flex
  flex-col
  rounded
  h-[30rem]
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

export const RecordUl = tw.ul`
  text-base
  text-[#A6A6A6]
`;

export const RecordList = tw.li`
  pl-2.5
  relative

  before:absolute
  before:w-1
  before:h-1
  before:bg-[#A6A6A6]
  before:block
  before:rounded-full
  before:left-0
  before:top-[0.625rem]
`;

export const Tags = tw.div`
  p-5
  flex
  gap-1
`;

export const Date = tw.span`
  text-[#A6A6A6]
  text-sm
`;

function RecordCard() {
  return (
    <CardContainer>
      <TxtWrap>
        <Date>2023.03 - 2023.08</Date>
        <Tit>코드스테이츠 프론트엔드 과정 수료</Tit>
        <RecordUl>
          <RecordList>JavaScript, React 학습</RecordList>
          <RecordList>20주 동안 매일 강도 높은 과제 수행 및
            페어 프로그래밍과 코드 리뷰 경험</RecordList>
          <RecordList>솔로 프로젝트 1회, 협업 프로젝트 2회 진행</RecordList>
          <RecordList>스터디에 참여하여 개발 공부를 진행하고
            동료들과 원활한 소통과 커뮤니케이션을 촉진</RecordList>
        </RecordUl>
      </TxtWrap>
      <Tags>
        <StackIcon stack={'html'} width={`w-[50px]`}/>
        <StackIcon stack={'css'} width={`w-[50px]`}/>
        <StackIcon stack={'ps'} width={`w-[50px]`}/>
        <StackIcon stack={'ai'} width={`w-[50px]`}/>
      </Tags>
    </CardContainer>
  );
}

export default RecordCard;