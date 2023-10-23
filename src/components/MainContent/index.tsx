import {
  About,
  AboutSection,
  ButtonProfile,
  FitTitle,
  HomeSection,
  Main,
  Photo,
  PhotoAbout,
  Project,
  ProjectContainer,
  ProjectImg,
  ProjectSection,
  ProjectTitle,
  TechSection,
  TextAbout,
  Title,
  TitleSection,
} from "./styles";

import profilePhoto from "../../assets/profile.jpg";
import aboutPhoto from "../../assets/Pro.png";
import projectPhoto from "../../assets/project.png";
import { Technologies } from "../Technologies";

export function MainContent() {
  return (
    <Main>
      <HomeSection>
        <div>
          <Title>
            Olá, eu sou <span>Bruno Felipe</span>
          </Title>
          <FitTitle>Desenvolvedor Front-end</FitTitle>

          <ButtonProfile>Currículo</ButtonProfile>
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

        <ProjectContainer>
          <Project>
            <ProjectImg src={projectPhoto} alt="" />
            <ProjectTitle>Upload.AI</ProjectTitle>
          </Project>

          <Project>
            <ProjectImg src={projectPhoto} alt="" />
            <ProjectTitle>Upload.AI</ProjectTitle>
          </Project>

          <Project>
            <ProjectImg src={projectPhoto} alt="" />
            <ProjectTitle>Upload.AI</ProjectTitle>
          </Project>

          <Project>
            <ProjectImg src={projectPhoto} alt="" />
            <ProjectTitle>Upload.AI</ProjectTitle>
          </Project>

          <Project>
            <ProjectImg src={projectPhoto} alt="" />
            <ProjectTitle>Upload.AI</ProjectTitle>
          </Project>

          <Project>
            <ProjectImg src={projectPhoto} alt="" />
            <ProjectTitle>Upload.AI</ProjectTitle>
          </Project>
        </ProjectContainer>
      </ProjectSection>

      <TechSection>
        <Technologies />
      </TechSection>
    </Main>
  );
}
