import {
  LinkProject,
  Project,
  ProjectContainer,
  ProjectImg,
  ProjectTitle,
} from "./styles";

import { projectData } from "../../utils/projects";

export const Projects = () => {
  return (
    <>
      <ProjectContainer>
        {projectData.map((project) => (
          <Project key={project.id}>
            <ProjectImg src={project.url} alt="" />
            <ProjectTitle>{project.title}</ProjectTitle>
            <LinkProject className="link" href={project.link}>
              veja mais
            </LinkProject>
            {console.log(project.url)}
          </Project>
        ))}
      </ProjectContainer>
    </>
  );
};
