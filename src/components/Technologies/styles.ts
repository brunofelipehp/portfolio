import styled from "styled-components";

export const TitleSection = styled.h2`
  font-size: 7rem;
  text-align: center;
  margin-bottom: 5rem;
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

export const TechContent = styled.div`
  width: 50rem;
  height: 40rem;
  border-radius: 0.8rem;
  text-align: center;
`;

export const TechTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  transition: all 0.3s ease-in;
`;

export const TechText = styled.p`
  opacity: 0.7;
  transition: all 0.3s ease-in;
`;
