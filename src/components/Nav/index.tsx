import { Container, ItemList, ListMenu, Logo, Menu, Navbar } from "./styles";

export function Nav() {
  return (
    <Navbar>
      <Container>
        <Logo>Portfólio</Logo>

        <Menu>
          <ListMenu>
            <ItemList>
              <a href="#">Home</a>
            </ItemList>
            <ItemList>
              <a href="#">Sobre</a>
            </ItemList>
            <ItemList>
              <a href="#">Projetos</a>
            </ItemList>
            <ItemList>
              <a href="#">Tecnologias</a>
            </ItemList>
          </ListMenu>
        </Menu>
      </Container>
    </Navbar>
  );
}
