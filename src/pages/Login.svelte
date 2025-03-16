<script>
  import { push } from "svelte-spa-router";
  import api from "../utils/api";
  import Toast from "../components/Toast.svelte";

  let email = "";
  let password = "";
  let message = "";
  let isLoading = false;

  async function handleLogin() {
    isLoading = true;

    try {
      if (!email || !password) {
        message = "Please fill in all fields.";
        return;
      }

      const res = await api.post("/auth/login", { email, password });

      message = res.data.message || "Success!";
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userData", JSON.stringify(res.data));

      setTimeout(() => {
        push("/dashboard");
      }, 1500);
    } catch (err) {
      message =
        err.response?.data?.message || "Login failed. Please try again.";
    } finally {
      isLoading = false;
      setTimeout(() => {
        message = "";
      }, 1500);
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-base-200 p-3">
  <div class="card w-full max-w-md bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-4">Login</h2>

      {#if message}
        <Toast {message} />
      {/if}

      <!-- Email Input -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Email</legend>
        <input
          type="email"
          class="input w-full"
          bind:value={email}
          placeholder="Enter your email"
        />
      </fieldset>

      <!-- Password Input -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Password</legend>
        <input
          type="password"
          class="input w-full"
          bind:value={password}
          placeholder="Enter your password"
        />
      </fieldset>

      <!-- Forgot Password -->
      <!-- <div class="flex items-center justify-between">
        <div></div>
        <a href="#" class="text-sm link link-primary">Forgot password?</a>
      </div> -->

      <!-- Login Button -->
      <div class="form-control mt-3">
        <button
          on:click={handleLogin}
          class="btn btn-primary w-full"
          disabled={message}
        >
          Login
        </button>
      </div>

      <!-- Sign Up Link -->
      <div class="text-center mt-4">
        <span class="text-sm">Don't have an account? </span>
        <a href="#/register" class="link link-primary">Sign up</a>
      </div>
    </div>
  </div>
</div>
