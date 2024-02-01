import tw from 'tailwind-styled-components';
import HoverModal from '../modal/HoverModal';
import { ICON_URL } from '../../utils/constant/constant';

type BlogT = {
  title?: string;
  url?: string;
}

type LinkProps = {
  name: string;
  text: string;
  giturl?: string | undefined;
  depoloyurl?: string | undefined;
  blog?: BlogT[];
}

export const LinkButton = tw.a`
  relative
  flex
  flex-col
  items-center
  justify-center
  gap-1
  px-3
  w-full
  group

  max-md:px-0
`;

export const HoverButton = tw.button`
  relative
  flex
  flex-col
  items-center
  justify-center
  gap-1
  px-3
  w-full
  group

  max-md:px-0
`;

export const IconCircle = tw.i`
  w-[47px]
  h-[47px]
  flex
  items-center
  justify-center
  bg-white
  border-solid
  rounded-full
  border
  border-[#dcdcdc]

  max-md:w-[37px]
  max-md:h-[37px]
`;

export const Img = tw.img`
  max-md:w-[50%]
`;

export const Text = tw.span`
  text-white
  text-xs
  font-medium

  max-md:text-mainBlack
  max-md:hidden
`;

function LinkBtn({ name, text, giturl, depoloyurl, blog }: LinkProps) {
  return (
    <>
      {
        depoloyurl === '' ? null :
          blog ? (
            <HoverButton aria-label={text}>
              <IconCircle>
                <Img src={`${ICON_URL}${name}.svg`} alt={name} />
              </IconCircle>
              <Text>{text}</Text>
              {blog && <HoverModal blog={blog} />}
            </HoverButton>
          ) : (
            <LinkButton href={giturl ? giturl : depoloyurl} aria-label={text} title='바로가기(새창)'>
              <IconCircle>
                <Img src={`${ICON_URL}${name}.svg`} alt={name} />
              </IconCircle>
              <Text>{text}</Text>
            </LinkButton>
          )
      }
    </>
  );
}

export default LinkBtn
