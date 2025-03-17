<script>
  import Router from "svelte-spa-router";
  import { routes } from "./utils";
  import { onMount } from "svelte";

  onMount(() => {
    if (window.location.pathname === "/" && !window.location.hash) {
      window.location.href = "/#/dashboard";
    }
  });
</script>

<main data-theme="dark">
  <Router {routes} />
</main>
