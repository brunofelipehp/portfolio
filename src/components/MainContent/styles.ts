import styled from "styled-components";

export const Main = styled.main`
  margin: 0 15% 0 15%;
  display: flex;
  flex-direction: column;
  gap: 40rem;
`;

export const HomeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;

  span {
    color: #986dff;
  }
`;

export const TitleSection = styled.h2`
  font-size: 7rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const FitTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const ButtonProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16rem;
  height: 5rem;
  padding: 1.6rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;

  background-color: #986dff;
  color: #ffffff;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextHome = styled.p`
  width: 30rem;
`;

export const Photo = styled.img`
  height: 30rem;
  width: 40rem;
  border-radius: 8rem;
`;

export const AboutSection = styled.section``;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background-color: #151515;
  width: 100%;
  height: 70rem;
  border-radius: 0.8rem;
`;

export const PhotoAbout = styled.img`
  height: 50rem;
  width: 60rem;
  border-radius: 0.8rem;
`;

export const TextAbout = styled.div`
  width: 60rem;
  text-align: center;
`;

export const ProjectSection = styled.section``;

export const Project = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
  gap: 1rem;
  width: 35rem;
  height: 25rem;
  padding: 8rem;
  border-radius: 0.8rem;

  background-color: #151515;
`;

export const ProjectTitle = styled.p`
  font-size: 1.7rem;
`;

export const ProjectImg = styled.img`
  width: 30rem;
  height: 15rem;
  border-radius: 0.8rem;
`;

export const LinksProject = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`;

export const LinkProject = styled.a`
  background-color: #986dff;
  padding: 0.8rem;
  border-radius: 1.6rem;
`;
