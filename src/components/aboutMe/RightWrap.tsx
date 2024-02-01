import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";
import BoldText from "../atoms/text/BoldText";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
`;

const RightWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. 프론트엔드로 전향한 이유?</SubTit>
          5년간 웹 디자이너로 활동하면서 사용자에게 동적이고 편리한 화면을 제공하고자 프론트엔드 개발자로 전향을 결심하게 되었습니다.<br />
          디자인 역량을 바탕으로 <PointText>사용자와 더 밀착된 상호작용</PointText> 가능한 프로젝트를 개발하고자 하는 목표와 함께<br />
          React, Styled Components, Tailwind, Redux, Recoil 등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고 있습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</SubTit>
          항상 <PointText>역지사지 마인드로 사용자 중심 개발을 추구합니다.</PointText> 직관적이고 친숙한 UI 제공과 Lighthouse를 활용해 성능 최적화에 신경쓰면서,<br />
          다양한 사용자들이 편리하게 서비스를 이용 할 수 있도록 기여하고자 합니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 자기계발을 위해 어떤 것들을 해왔는지?</SubTit>
          지속적인 학습을 위해 스터디에 적극 참여하고, 다양한 강의를 수강하여 실무에 적용할 수 있는 지식을 쌓고 있습니다.<br />
          더불어 <PointText>낯선 기술에도 포기 하지 않고 메타인지 방식을 활용</PointText>해 문제에 직면하여 팀원들과의 협업을 통해 더 나은 해결책을 찾고 배우려는 의지가 강합니다.<br />
          <BoldText>열린 마음으로 피드백을 수용</BoldText>해 더 나은 서비스를 개발하기 위해 노력하며,
          높은 의지와 열정으로 새로운 도전에  임할 준비가 되어 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default RightWrap;