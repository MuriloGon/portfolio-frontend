import useCurrentRoute from "../../hooks/useCurrentRoute";
import { routes } from "../../utils/variables";


function Projects() {
  useCurrentRoute(routes.projects);
  return (
    <h1>Projects</h1>
  )
};

export default Projects;
