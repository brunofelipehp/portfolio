import styled from "styled-components";

export const Navbar = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background-color: #111111;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15% 0 15%;
`;

export const Logo = styled.div`
  font-size: 4rem;
  font-weight: 500;
  color: #986dff;
`;

export const Menu = styled.nav``;

export const ListMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;
`;

export const ItemList = styled.li`
  text-decoration: none;

  a {
    cursor: pointer;
    &:hover::after {
      width: 100%;
      border-bottom: 0.2rem solid #986dff;
    }

    &::after {
      transition: border-bottom 0.3s ease-in-out;
      content: "";
      display: block;
    }
  }
`;
