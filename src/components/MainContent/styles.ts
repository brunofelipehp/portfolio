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
  margin-bottom: 5rem;
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
  flex-wrap: wrap;
  gap: 2rem;
  width: 20rem;
  height: 5rem;
  padding: 1.6rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.6rem;
  background-color: #986dff;
  color: #ffffff;
  transition: all 0.3s ease-in-out;

  cursor: pointer;

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
  gap: 8rem;
  background-color: #151515;
  width: 100%;
  height: 70rem;
  padding: 5rem;
  border-radius: 0.8rem;
`;

export const PhotoAbout = styled.img`
  height: 40rem;
  width: 50rem;
  border-radius: 0.8rem;
`;

export const TextAbout = styled.div`
  width: 60rem;
  text-align: center;
`;

export const ProjectSection = styled.section``;

export const TechSection = styled.section`
  margin-bottom: 20rem;
`;
