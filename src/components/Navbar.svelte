<script>
  import { push } from "svelte-spa-router";
  import Button from "./Button.svelte";

  const handleLogout = () => {
    let isTrue = confirm("Are you sure want to logout?");
    if (isTrue) {
      localStorage.clear();
      push("/login");
    }
  };

  const item = localStorage.getItem("userData");
  const userData = JSON.parse(item).data;
</script>

<div class="navbar bg-base-100 z-100 shadow-sm sticky top-0">
  <div class="flex-1">
    <a href="#/dashboard" class="btn btn-ghost text-xl">Jongkong</a>
  </div>

  <h1 class="me-5">{userData.name}</h1>

  <Button title="Logout" onclick={handleLogout} />
</div>
