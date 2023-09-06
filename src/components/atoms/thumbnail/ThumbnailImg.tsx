import tw from 'tailwind-styled-components';

type ThumbnailT = {
  projectName: string;
};

export const Img = tw.img`
  w-full
`;

function ThumbnailImg({projectName}:ThumbnailT) {
  const SRC_NAME = 'src/assets/images/thumbnail_';
  return (
    <>
      <Img src={`${SRC_NAME}${projectName}.webp`} alt={projectName} />
    </>
  );
}

export default ThumbnailImg;