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
    cursor: pointer;

    &::after {
      width: 100%;
      height: 0.2rem;
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
  width: 12rem;
  background-color: #986dff;
  padding: 0.8rem;
  border-radius: 1.6rem;
`;

export const TechSection = styled.section`
  margin-bottom: 20rem;
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;
`;

export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 50rem;
  gap: 2rem;
`;

export const Tech = styled.div`
  display: grid;
  place-content: center;
  width: 12.3rem;
  height: 13rem;
  background-color: #151515;
  border-radius: 0.8rem;
  transition: hover 0.3s ease-in-out;
  margin-bottom: 2rem;

  &:hover {
    border: 0.1rem solid #986dff;
  }
`;

export const TechImg = styled.img`
  width: 50rem;
  height: 40rem;
  border-radius: 0.8rem;
`;
