import {
  Tech,
  TechContainer,
  TechContent,
  TechText,
  TechTitle,
  Techs,
  TitleSection,
} from "./styles";

import {
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiReact,
} from "react-icons/si";
import { FaHtml5, FaGithub, FaCss3 } from "react-icons/fa";

import { useState } from "react";

const icons = [
  {
    id: 1,
    icon: <FaHtml5 size="6rem" color="#986dff" />,
    title: "HTML 5",
    text: "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir.",
  },
  {
    id: 2,
    icon: <FaCss3 size="6rem" color="#986dff" />,
    title: "CSS",
    text: "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas.",
  },
  {
    id: 3,
    icon: <SiJavascript size="6rem" color="#986dff" />,
    title: "JavaScript",
    text: "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web.",
  },
  {
    id: 4,
    icon: <SiTypescript size="6rem" color="#986dff" />,
    title: "TypeScript",
    text: "HTML é a linguagem de marcação padrão para páginas da Web Com HTML. você pode criar seu próprio site.  HTML é fácil de aprender - Você vai gostar",
  },
  {
    id: 5,
    icon: <SiReact size="6rem" color="#986dff" />,
    title: "React JS",
    text: "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada.",
  },
  {
    id: 6,
    icon: <SiStyledcomponents size="6rem" color="#986dff" />,
    title: "styled-components",
    text: "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.",
  },
  {
    id: 7,
    icon: <FaGithub size="6rem" color="#986dff" />,
    title: "HTML 5",
    text: "HTML é a linguagem de marcação padrão para páginas da Web Com HTML. você pode criar seu próprio site.  HTML é fácil de aprender - Você vai gostar",
  },
];

interface IconsProps {
  id: number;
}

export const Technologies = () => {
  const [techText, setTechText] = useState<string>(
    "*passe o cursor do mouse no card para ler*"
  );
  const [techTitle, setTechTitle] = useState<string>("");

  const handleTechContent = ({ id }: IconsProps) => {
    icons.filter((icon) => {
      if (icon.id === id) {
        setTechText(icon.text);
        setTechTitle(icon.title);
      }
    });
  };

  return (
    <>
      <TitleSection>Tecnologias</TitleSection>

      <TechContainer>
        <Techs>
          {icons &&
            icons.map((icon, index) => (
              <Tech
                key={index}
                onMouseOver={() => handleTechContent(icon)}
                onMouseOut={() =>
                  setTechText("*passe o cursor do mouse no card para ler*")
                }
              >
                {icon.icon}
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
