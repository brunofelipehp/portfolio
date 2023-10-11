import styled from "styled-components";

export const Main = styled.main`
  margin: 0 15% 0 15%;
`;

export const AboutSection = styled.section`
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

export const FitTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
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

  background-color: #986dff;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextAbout = styled.p`
  width: 30rem;
`;

export const Photo = styled.img`
  height: 30rem;
  width: 40rem;
  border-radius: 8rem;
`;
