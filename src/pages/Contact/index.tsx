import useCurrentRoute from "../../hooks/useCurrentRoute";
import { routes } from "../../utils/variables";


function Contact() {
  useCurrentRoute(routes.contact);
  return (
    <h1>Contact</h1>
  )
};

export default Contact;
