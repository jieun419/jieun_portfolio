import tw from 'tailwind-styled-components';

export const NavContainer = tw.nav`
  flex
  flex-col
  text-6xl
  gap-3
  sticky
  top-10
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
      <NavLink href="" title="">Project</NavLink>
      <NavLink href="" title="">Record</NavLink>
      <NavLink href="" title="">Study</NavLink>
    </NavContainer>
  );
}

export default Nav;