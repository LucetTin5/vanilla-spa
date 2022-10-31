const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: () => {} },
    { path: "/users", view: () => {} },
    { path: "/404", view: () => {} },
  ];
  const currentMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname == route.path,
    };
  });
};

document.addEventListener("DOMContentLoaded", () => router());
