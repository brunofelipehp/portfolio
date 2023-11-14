import { Projects } from "../Projects";

import {
  About,
  AboutSection,
  ButtonProfile,
  FitTitle,
  HomeSection,
  Main,
  Photo,
  PhotoAbout,
  ProjectSection,
  TechSection,
  TextAbout,
  Title,
  TitleSection,
} from "./styles";

import profilePhoto from "../../assets/profile.jpg";
import aboutPhoto from "../../assets/Pro.png";

import { Technologies } from "../Technologies";
import { BsDownload } from "react-icons/bs";

export function MainContent() {
  return (
    <Main>
      <HomeSection>
        <div>
          <Title>
            Olá, eu sou <span>Bruno Felipe</span>
          </Title>
          <FitTitle>Desenvolvedor Front-end</FitTitle>

          <ButtonProfile>
            Currículo <BsDownload size="1.6rem" color="#fff" />
          </ButtonProfile>
        </div>
        <Photo src={profilePhoto} alt="profile" />
      </HomeSection>

      <AboutSection>
        <TitleSection>Sobre</TitleSection>
        <About>
          <PhotoAbout src={aboutPhoto} alt="Photo About" />
          <TextAbout>
            <p>
              Olá! Sou Bruno Felipe, um desenvolvedor front-end apaixonado por
              tecnologia e criação. Estou sempre em busca de novas habilidades e
              tecnologias para aprimorar minhas capacidades.
            </p>
            <p>
              Com experiência em HTML, CSS, JavaScript, React e TypeScript,
              estou preparado para enfrentar desafios de desenvolvimento web de
              forma criativa e eficiente.
            </p>
            <p>
              Estou aberto a colaborações e ansioso para aprender com outros
              profissionais. Seja para otimizar o desempenho de um site ou
              solucionar problemas complexos, estou pronto para contribuir de
              forma dedicada.
            </p>
          </TextAbout>
        </About>
      </AboutSection>

      <ProjectSection>
        <TitleSection>Projetos</TitleSection>

        <Projects />
      </ProjectSection>

      <TechSection>
        <Technologies />
      </TechSection>
    </Main>
  );
}
