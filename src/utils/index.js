import wrap from "svelte-spa-router/wrap";
import Dashboard from "../pages/Dashboard.svelte";
import Login from "../pages/Login.svelte";
import Notfound from "../pages/Notfound.svelte";
import Register from "../pages/Register.svelte";

export const themes = [
  "acid",
  "autumn",
  "black",
  "bumblebee",
  "caramellatte",
  "corporate",
  "cyberpunk",
  "dim",
  "dracula",
  "emerald",
  "fantasy",
  "garden",
  "light",
  "lofi",
  "nord",
  "pastel",
  "retro",
  "silk",
  "valentine",
  "winter",
  "wireframe",
];

const isAuthenticated = () =>
  localStorage.getItem("token")
    ? true
    : ((window.location.href = "#/login"), false);

export const routes = {
  "/login": Login,
  "/register": Register,
  "/dashboard": wrap({
    component: Dashboard,
    conditions: [isAuthenticated],
  }),
  "*": Notfound,
};
