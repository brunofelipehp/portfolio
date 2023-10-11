import { MainContent } from "./components/MainContent";
import { Nav } from "./components/Nav";
import { ContainerApp } from "./styles/app";

export function App() {
  return (
    <ContainerApp>
      <Nav />
      <MainContent />
    </ContainerApp>
  );
}
