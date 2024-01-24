import tw from 'tailwind-styled-components';

type ThumbnailT = {
  url: string;
};

export const Img = tw.img`
  object-cover
  w-full
  h-full
`;

function ThumbnailImg({ url }: ThumbnailT) {
  return <Img src={url} loading='lazy' alt='thumbnail' />
}

export default ThumbnailImg;