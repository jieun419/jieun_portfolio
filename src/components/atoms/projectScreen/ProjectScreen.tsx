import tw from 'tailwind-styled-components';

type ThumbnailT = {
  imgurl: string;
};

export const ScreenContainer = tw.div`
  bg-white  
  border-solid
  border-[#dcdcdc]
  border-[0.0625rem]
  p-3
  w-[calc(100vw-60vw)]
  rounded-[2.125rem]

  max-md:w-[calc(100vw-10vw)]
`;

export const Img = tw.img`
  w-full
  rounded-[2.125rem]
`;

function ProjectScreen({ imgurl }: ThumbnailT) {
  return (
    <ScreenContainer>
      <Img src={imgurl} loading='lazy' alt='projectScreen' />
    </ScreenContainer>
  );
}

export default ProjectScreen;