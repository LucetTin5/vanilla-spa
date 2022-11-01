import Home from "../pages/Home/Home.js";

export default [
  { path: "/", view: Home },
  { path: "/admin", view: Admin },
  { path: "/users", view: User },
  { path: "/users/:user-id", view: Profile },
  { path: "/cart", view: Cart },
  { path: "/product", view: Product },
  { path: "/404", view: NotFound },
];
