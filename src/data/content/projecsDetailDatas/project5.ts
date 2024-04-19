export const project5 = {
  name: 'haru',
  pointcolor: 'before:bg-[#77D1FD]',
  title: '당일 일정 등록 서비스',
  subtext:
    '당일 일정에서 하루,친구의 mate를 합쳐서 서비스명을 “하루메이트”로 짓게 되었습니다.\n하루메이트는 당일 일정을 만들고 친구에게 손쉽게 공유 할 수 있는 서비스입니다.\n친구와 놀러가기 위해서 계획을 짤 때 일정을 편리하게 공유하면 좋겠다는 생각으로 부터 시작되었습니다.\n\n일정 생성 과정이 지나치게 복잡한 서비스들이 대부분입니다.\n저희의 목표는 사용자들이 더욱 쉽고 간편하게 일정을 만들고 공유 할 수 있는 서비스를 제공하는 것입니다.\n\n*현재 로그인이 이루어지지 않아 주요 기능을 할 수 없는 상태입니다.',
  data: '2023.07 - 2023.08',
  team: '6인 (프론트엔드 3명, 백엔드 3명)',
  tag: ['팀', '반응형', '사이드'],
  imgurl: 'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_haru.webp',
  detailimginfo: [
    {
      imgurl: 'https://user-images.githubusercontent.com/77836614/255490884-6341a0f3-e248-4af3-9733-4846c1ae7c51.png',
      subject: '메인 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/77836614/255491184-93dca001-e946-4665-8093-c50dcdb6aad0.png',
      subject: '일정등록 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/77836614/255491417-fef65d05-d4b6-4462-9239-86b715b3789b.png',
      subject: '커뮤니티 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/77836614/255491568-89573d57-166d-456d-ae5d-df5928d4d50b.png',
      subject: '마이 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/77836614/255491604-a97df5fd-ebe5-4ab1-b93a-93d655772683.png',
      subject: '설정 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/77836614/255491649-f757bcdb-6a4a-4594-ad92-f6a87ef8d6e3.png',
      subject: '랜딩 페이지',
    },
  ],
  giturl: 'https://github.com/codestates-seb/seb44_main_006',
  depoloyurl: 'https://harumate.netlify.app/',
  blogurl: [
    {
      title: '프로젝트 회고',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기main-project-회고',
    },
  ],
  featinfo: [
    '카카오 맵 API를 활용해 장소 표시 및 검색',
    '일정 등록 및 수정',
    '마이페이지에서 등록한 일정과 즐겨찾기한 일정 확인하기',
    '친구에게 일정 공유하기(링크, 카카오톡 링크)',
    '다른 사람들이 공유한 일정 확인하고 즐겨찾기 추가하기',
  ],
  tools: [
    {
      title: 'Vite',
      detail:
        'Vite는 최신 브라우저의 기본 ES 모듈 기능을 사용하여 더 빠른 개발 서버 시작 및 주문형 컴파일을 가능하게 합니다. 이로 인해 CRA의 Webpack 기반 서버에 비해 응답성이 뛰어난 개발 경험을 얻을 수 있었습니다.',
    },
    {
      title: 'React',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    {
      title: 'TypeScript',
      detail:
        'TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.',
    },
    {
      title: 'Redux Toolkit',
      detail:
        'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
    },
    {
      title: 'React Query',
      detail:
        'React Query는 React 애플리케이션에서 데이터 가져오기, 관리 및 캐싱을 단순하게 만들어주는 JavaScript 라이브러리입니다. 서버로부터 데이터를 비동기적으로 가져오고 관리하기 위한 다양한 도구와 패턴을 제공하며, API 요청을 처리하고 캐싱하여 성능을 최적화할 수 있습니다.',
    },
    {
      title: 'Styled Components',
      detail:
        'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.',
    },
  ],
  parts: [
    {
      title: '프로젝트 아이디어 도출 및 기획 구성',
      detailList: [
        `쉽고 간단하게 일정을 만들고 공유할 수 있는 서비스를 제작하고자 \`Figjam\`을 활용해 팀원들과 [flow chart](https://www.figma.com/file/EhRDyyDh1nHbYudipkILDf/%EA%B8%B0%ED%9A%8D?type=whiteboard&t=mEVjYU0wb8kfhd1C-1)를 만들고 벤치마킹을 통해 아이디어를 구체화`,
      ],
    },
    {
      title: '공통 컴포넌트 작업',
    },
    {
      title: '웹 표준 / 접근성 고려하며 컴포넌트 작업',
    },
    {
      title: '공통으로 사용하는 header 로그인 유/무에 따른 화면 구성, footer 작업',
      detailList: [
        `\`header\`는 스크롤 여부에 따라 스타일이 변하도록 구현하고, 로그인 후 유저 프로필 사진 클릭 시 메뉴가 나오도록 작업`,
        `\`footer\`에는 팀원 이름 마우스 호버 시 팀원의 역할이 표시되는 재미있는 요소를 추가하고, 클릭 시 팀원의 \`Github\` 페이지로 이동할 수 있도록 작업`,
      ],
    },
    {
      title: '메인 페이지 UI 및 useRef, requestAnimationFrame를 통한 커서 커스터마이징 구현',
      detailList: [
        `커서 커스터마이징을 이미지 사용하기보단 마우스 이벤트에 따라 사용자 경험을 개선하도록 구상 `,
        `\`useRef\`를 통해 마우스 커서 컴포넌트를 저장하고 \`requestAnimationFrame\` 메서드를 활용해 마우스 동작을 최적화`,
      ],
    },
    {
      title: '마이 페이지 UI 작업 및 유저 닉네임 수정하기',
      detailList: [
        `마이 페이지 반응형을 적용하고 \`React Query\`를 통해 유저 정보를 가져와 닉네임을 수정할 수 있도록 작업`,
        `글자 수 제한, \`"탈퇴한 사용자"\` 닉네임은 사용할 수 없도록 작업해 사용자의 악용사례를 방지`,
      ],
    },
    {
      title: '설정 페이지 UI 작업',
      detailList: [`설정 페이지에 반응형을 적용하고 로그인, 로그아웃 기능을 추가해 사용자 경험을 향상`],
    },
    {
      title: '웹 디자인 경험을 살려 전반적인 디자인 총괄 및 로고 디자인',
      detailList: [
        `전체적인 UI 디자인 담당, UX의 경우 팀원들과 협업하여 수정`,
        `로고 디자인 직접 수행하여 프로젝트의 브랜딩을 기여`,
      ],
    },
  ],
  trouble: [
    {
      title: '메인 페이지의 커서 커스터마징으로 인한 사용자 경험 이슈',
      detailList: [
        `**[문제점]** 메인 화면의 커서는 초반에 이미지 요소를 고려했으나 마우스 호버시 뚝뚝 끊긴 느낌을 받아 사용자 경험에 부정적인 영향을 줄 것으로 판단했습니다.`,
        `**[해결]** \`useRef\`를 통해 마우스 커서 컴포넌트를 저장하고, 스크롤 시에도 이를 유지하고 최적화하기 위해 \`requestAnimationFrame\` 메서드를 활용해 마우스 동장을 최적화했습니다. 사용자가 버튼에 호버할 때 자연스럽고 부드러운 커서 경험을 제공하여 많은 긍정적 피드백을 받을 수 있었습니다.`,
      ],
    },
  ],
  insight: [
    {
      title: '팀원들과의 스팩 차이를 극복하기 위한 노력',
      detailList: [
        `함께 진행하는 팀원들과 비교했을 때 기술 스팩 면에서 부족함을 느꼈습니다. 팀원들의 빠른 작업 속도와 높은 이해도를 따라가기 어려웠고, 프로젝트 진행에 어려움을 겪었습니다.`,
        `이를 극복하기 위해 메타인지 방식을 활용해 현재 제가 부족한 점이 무엇이고, 팀 프로젝트에서 어떤 역할을 수행할 수 있는지 고민했습니다.`,
        `부족한 기술 분야를 보완하기 위해 개인 학습 시간을 가졌습니다. 또한, 작업 시간을 남들 보다 더 투자하여 맡은 역할을 수행했으며, 모르는 부분은 팀원들에게 질문하고 협업을 통해 적극적으로 도움을 받았습니다.`,
        `더불어 HTML, CSS, 디자인 강점을 발휘해 프로젝트 완성도를 높이고, 팀원들과 함께 해결하며 서로에게 배우고 성장할 수 있었습니다.`,
        `이번 프로젝트를 통해 꾸준한 자기 계발과 새로운 기술 트렌드를 학습하기 위해 스터디를 개설하여 진행하고 있습니다.`,
      ],
    },
  ],
};
