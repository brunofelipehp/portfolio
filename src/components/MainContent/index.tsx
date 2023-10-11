import {
  AboutSection,
  ButtonProfile,
  FitTitle,
  Main,
  Photo,
  Title,
} from "./styles";

import profilePhoto from "../../assets/profile.jpg";

export function MainContent() {
  return (
    <Main>
      <AboutSection>
        <div>
          <Title>
            Olá, eu sou <span>Bruno Felipe</span>
          </Title>
          <FitTitle>Desenvolvedor Front-end</FitTitle>

          <ButtonProfile>Currículo</ButtonProfile>
        </div>
        <Photo src={profilePhoto} alt="profile" />
      </AboutSection>
    </Main>
  );
}
