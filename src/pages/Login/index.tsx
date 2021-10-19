import useCurrentRoute from "../../hooks/useCurrentRoute";
import { routes } from "../../utils/variables";


function Login() {
  useCurrentRoute(routes.login);

  return (
    <h1>Login</h1>
  );
}

export default Login;
