import styled from "styled-components";

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
