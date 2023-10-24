import {
  Tech,
  TechContainer,
  TechContent,
  TechText,
  TechTitle,
  Techs,
  TitleSection,
} from "./styles";

import { useState } from "react";

import { icons } from "../../utils/techs";
import { IconTechs } from "../IconTechs";

interface IconsProps {
  id: number;
}

export const Technologies = () => {
  const [techText, setTechText] = useState<string>(
    "*passe o cursor do mouse no card para ler*"
  );
  const [techTitle, setTechTitle] = useState<string>("");

  const handleInfoTech = ({ id }: IconsProps) => {
    icons.filter((icon) => {
      if (icon.id === id) {
        setTechText(icon.text);
        setTechTitle(icon.title);
      }
    });
  };

  const hideInfoTech = () => {
    setTechText("*passe o cursor do mouse no card para ler*");
    setTechTitle("");
  };

  return (
    <>
      <TitleSection>Tecnologias</TitleSection>

      <TechContainer>
        <Techs>
          {icons.map((icon, index) => (
            <Tech
              key={index}
              onMouseOver={() => handleInfoTech(icon)}
              onMouseOut={() => hideInfoTech()}
            >
              {<IconTechs iconName={icon.icon} size="6rem" color="#986dff" />}
            </Tech>
          ))}
        </Techs>

        <TechContent>
          <TechTitle>{techTitle}</TechTitle>
          <TechText>{techText}</TechText>
        </TechContent>
      </TechContainer>
    </>
  );
};
