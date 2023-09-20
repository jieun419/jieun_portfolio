import tw from 'tailwind-styled-components';
import { TabsPropsT } from '../../types/type';

export const NavContainer = tw.nav`
  sticky
  top-10
  flex
  flex-col
  gap-3
  w-[10vw]
  h-screen
`;

export const NavLink = tw.button`
  text-[#373737]
  font-black
  text-6xl
  transition

  max-md:text-4xl
  max-lg:text-5xl
`;

function Nav({ navTabs }: TabsPropsT) {
  return (    
    <NavContainer>
      {
        navTabs.map((tab, idx) => (
          <NavLink
            key={idx}
            onClick={tab.scrollToTarget}
            className={tab.isTarget ? 'text-[#EFEFF1]' : 'text-[#373737] hover:text-[#4a4a4a]'}
          >
            {tab.targetName}
          </NavLink>
        ))
      }
    </NavContainer>
  );
}

export default Nav;