// import { styled } from 'styled-components'
import myImg from '../../assets/images/jieun_img.webp'
// import tw from 'tailwind-styled-components'
import tw from 'tailwind-styled-components'

const MainComponent = tw.main`
  flex
  items-center
  flex-col
  gap-y-6
  items-center
  mt-3
  mb-20
`;

export function Front() {
  return (
    <MainComponent className='flex
    items-center
    flex-col'>
      <div>Front-End</div>
      <h2>프론트엔드 개발자 최지은입니다.</h2>
      <p>사용자를 생각하는 역지사지 마인드,</p>
      <p>포기하지 않고 책임감있게 일하는 개발자입니다.</p>
      <img src={myImg} alt="최지은 인물 사진" />
    </MainComponent>
  )
}
