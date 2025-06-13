import { createRoot } from "react-dom/client";
import NavBarBoda from "./navbar.jsx";
import Main from './mainContent.jsx'
import './index.css'

let root = createRoot(document.getElementById("root"));

root.render(
  <>
    <NavBarBoda />
    <Main />
  </>
);

