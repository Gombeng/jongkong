import wrap from "svelte-spa-router/wrap";
import Dashboard from "../pages/Dashboard.svelte";
import Login from "../pages/Login.svelte";
import Notfound from "../pages/Notfound.svelte";
import Register from "../pages/Register.svelte";
import { writable } from "svelte/store";

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
  "/": wrap({
    component: Dashboard,
    conditions: [isAuthenticated],
  }),
  "/dashboard": wrap({
    component: Dashboard,
    conditions: [isAuthenticated],
  }),
  "*": Notfound,
};

// export const websiteData = writable({
//   hero: {
//     name: "John Doe",
//     role: "Senior Consultant",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, nemo.",
//     links: [{ title: "CV", link: "cv.com" }],
//   },
//   about: {
//     experiences: [
//       {
//         position: "Frontend Developer",
//         company: "AIA Singapore",
//         start: "2023",
//         end: "2025",
//         location: "Batam",
//         tasks: [
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, omnis.",
//         ],
//       },
//       {
//         position: "Backend Developer",
//         company: "Astra International",
//         start: "2020",
//         end: "2023",
//         location: "Jakarta",
//         tasks: [
//           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, omnis.",
//         ],
//       },
//     ],
//     education: [],
//   },
//   projects: [
//     {
//       title: "asf",
//       desc: "sfa",
//       url: {
//         repo: "sfa",
//         demo: "sfda",
//       },
//     },
//   ],
//   techStacks: ['javascript', 'svelte', 'react', 'expressjs', 'mongodb'],
// });

export const websiteData = writable({
  hero: { name: "", role: "", desc: "", links: [] },
  about: { experiences: [], education: [] },
  projects: [],
  techStacks: [],
});
