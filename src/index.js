import $ from "jquery";
import App from "./App/App";

import "bootstrap/dist/css/bootstrap.min.css";
import scss from "../styles/style.scss";

$(document).ready(() => {
  let app = new App();
  app.init();
});






