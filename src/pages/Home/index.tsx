import Techs from "../../components/Techs";
import useCurrentRoute from "../../hooks/useCurrentRoute";
import { routes } from "../../utils/variables";

function Home() {
  useCurrentRoute(routes.home);

  return (
    <Techs />
  )
};

export default Home;
