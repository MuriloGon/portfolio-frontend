import useCurrentRoute from "../../hooks/useCurrentRoute";
import { routes } from "../../utils/variables";

function Home() {
  useCurrentRoute(routes.home);

  return (
    <h1>Home</h1>
  )
};

export default Home;
