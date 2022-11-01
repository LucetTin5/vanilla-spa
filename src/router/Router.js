import Routes from "./Routes.js";
import { qs, insertHTML } from "../utils/index.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const router = () => {
  const potentialMatches = Routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: Routes[Routes.length - 1],
      isMatch: true,
    };
  }

  insertHTML(qs("#root"), match.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
