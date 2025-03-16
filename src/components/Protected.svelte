<script>
  import { onDestroy } from "svelte";
  import { push } from "svelte-spa-router";
  import { isAuthenticated } from "../utils";

  export let component; // The actual component to render if authenticated
  let authenticated = false;

  const unsubscribe = isAuthenticated.subscribe((value) => {
    authenticated = value;
    if (!authenticated) {
      push("/login"); // Redirect if not authenticated
    }
  });

  onDestroy(unsubscribe);
</script>

{#if authenticated}
  <svelte:component this={component} />
{:else}
  <p>Redirecting to login...</p>
{/if}
