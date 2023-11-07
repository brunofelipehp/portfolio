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

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10rem;
`;

export const Project = styled.div`
  width: 37rem;
  height: 25rem;
  display: grid;
  place-content: center;
  text-align: center;

  border-radius: 0.8rem;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5);

    &::after {
      width: 100%;
      height: 0.2rem;
    }

    .link {
      opacity: 1;
    }
  }

  &::after {
    transition: width 0.9s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    content: "";
    display: block;
    width: 0%;
    height: 0.2rem;
    background-color: #986dff;
    border-radius: 0.8rem;
  }
`;

export const ProjectTitle = styled.p`
  font-size: 1.7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  height: 100%;
  opacity: 0.5;
  border-radius: 0.8rem;
  animation-delay: 0.3s;
  display: block;
`;

export const LinksProject = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`;

export const LinkProject = styled.a`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  font-size: 1rem;
  background-color: #986dff;
  padding: 0.1rem;
  border-radius: 1.6rem;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
`;

export const TechSection = styled.section`
  margin-bottom: 20rem;
`;
