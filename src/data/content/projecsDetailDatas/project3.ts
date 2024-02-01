export const project3 = {
  name: 'coz',
  pointcolor: 'before:bg-[#6a57e0]',
  title: 'Coz Shopping',
  subtext:
    '코드스테이츠 과제로 주어진 요구 명세서를 확인 하고 해당 내용을 토대로 진행했습니다.\n짧은 기간에 요구한 기능을 구현하는게 목적이며, 프로젝트를 진행하며 필수인\nGit, Github를 학습 하는데 많은 도움이 되었습니다.\n\n* 현재 서버는 닫혀있는 상태입니다.',
  data: '2023.07 - 2023.08',
  team: '1인 (솔로)',
  tag: ['솔로', '사이드'],
  imgurl:
    'https://raw.githubusercontent.com/jieun419/jieun_portfolio/main/src/assets/images/thumbnail_cozshopping.webp',
  detailimginfo: [
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/239165066-c8cb8e8f-fb28-4a71-9eba-a1c41bdc5e3d.png',
      subject: '메인 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/239165560-b196d6ab-7038-415d-9e09-a7a9a09f76a1.png',
      subject: '상품 이미지 클릭 시 모달창 표시',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/239166014-9738b70d-eb5b-4fd0-b939-2e912bc1b41a.png',
      subject: '상품 리스트 페이지',
    },
    {
      imgurl: 'https://user-images.githubusercontent.com/109754988/239166344-d78cd67c-0690-4908-b9f0-e5a7baed0b5d.png',
      subject: '북마크 상품 리스트 페이지',
    },
  ],
  giturl: 'https://github.com/jieun419/fe-sprint-coz-shopping',
  depoloyurl: '',
  blogurl: [
    {
      title: '프로젝트 요구 분석 및 플래닝',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-1-프로젝트-요구-분석-및-플래닝',
    },
    {
      title: '헤더, 푸터, 4개의 컴포넌트 작업..ing',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-2-헤더-푸터-4개의-컴포넌트-작업..ing',
    },
    {
      title: '4개의 컴포넌트 작업..ing',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-3-4개의-컴포넌트-작업..ing',
    },
    {
      title: '메인 화면, 북마크 기능 구현',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-4-메인-화면-북마크-기능-구현',
    },
    {
      title: '상품 리스트, 북마크 리스트 구현',
      url: 'https://velog.io/@crg1050/코드스테이츠-FE-44기-솔로-프로젝트-5-상품-리스트-북마크-리스트-구현',
    },
  ],
  featinfo: [
    'API를 활용한 리스트 확인',
    'LocalStrage를 활용한 북마크 기능',
    '해당 컨텐츠 클릭 시 모달로 이미지 크게 보기',
    '상품 리스트 타입에 따라 필터링 (탭 메뉴)',
  ],
  tools: [
    {
      title: 'React',
      detail:
        'React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.',
    },
    // {
    //   title: 'Redux Toolkit',
    //   detail:
    //     'Redux Toolkit은 Redux 상태 관리 라이브러리를 사용하기 위한 보조 도구입니다. Redux보다 코드를 간결하게 작성할 수 있게 도와주며, 전역으로 상태를 관리할 수 있습니다.',
    // },
    {
      title: 'Styled Components',
      detail:
        'Styled Components는 JavaScript 코드 내에서 CSS를 작성할 수 있게 해주는 라이브러리입니다. 컴포넌트와 스타일을 함께 정의해 컴포넌트 별로 스타일을 관리하고 재사용할 수 있습니다.',
    },
  ],
  parts: [
    {
      title: '북마크 구현',
      detail:
        'localStorage를 활용해 북마크 버튼 클릭 시 북마크 리스트에 추가 되도록 했습니다. 더불어 새로고침 되어도 유지가 되고 북마크 취소할 경우 북마크에서 삭제될 수 있도록 했습니다.',
    },
    {
      title: '타입에 따른 상태 다르게 보이기',
      detail:
        '요구사항에서 총 4가지 컨텐츠가 있었고 다른 내용을 표기했습니다. 이부분 참고하여 타입에 따라 다르게 표기 되도록 작업했습니다.',
    },
  ],
};
