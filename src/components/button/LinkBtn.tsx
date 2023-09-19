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
  flex
  flex-col
  items-center
  justify-center
  gap-1
  px-3
  w-full
  group
`;

export const IconCircle = tw.i`
  w-[47px]
  h-[47px]
  flex
  items-center
  justify-center
  bg-white
  rounded-full
`;

export const Text = tw.span`
  text-white
  text-xs
  font-medium
`;

function LinkBtn({ name, text, giturl, depoloyurl, blog }: LinkProps) {
  return (
    <>
      {
        depoloyurl === '' ? null : (
          <LinkButton href={giturl ? giturl : depoloyurl}>
            <IconCircle>
              <img src={`${ICON_URL}${name}.svg`} alt={name} />
            </IconCircle>
            <Text>{text}</Text>
            {blog && <HoverModal blog={blog} />}
          </LinkButton>
        )
      }
    </>
  );
}

export default LinkBtn
