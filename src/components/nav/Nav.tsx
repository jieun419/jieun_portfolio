import tw from 'tailwind-styled-components';

export const NavContainer = tw.nav`
  sticky
  top-10
  flex
  flex-col
  gap-3
  text-6xl
  w-[10vw]
  h-screen
`;

export const NavLink = tw.a`
  text-[#373737]
  font-black
  text-6xl
  transition
  hover:text-[#EFEFF1]
`;

function Nav() {
  return (
    <NavContainer>
      <NavLink href="#project" title="">Project</NavLink>
      <NavLink href="#record" title="">Record</NavLink>
      <NavLink href="" title="">Study</NavLink>
    </NavContainer>
  );
}

export default Nav;