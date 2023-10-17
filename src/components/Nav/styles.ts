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

    &:hover {
      color: #986dff;
      &::after {
        width: 100%;
        height: 0.4rem;
      }
    }

    &::after {
      transition: width 0.5s ease-in-out;
      content: "";
      display: block;
      width: 0%;
      height: 0.2rem;
      background-color: #986dff;
    }
  }
`;
