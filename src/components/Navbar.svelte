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

  <h1 class="me-3">{userData.name}</h1>

  <!-- <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#/">Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a href="#/">Link 1</a></li>
            <li><a href="#/">Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div> -->

  <Button title="Logout" onclick={handleLogout} />
</div>
