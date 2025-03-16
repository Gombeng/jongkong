<script>
  import { push } from "svelte-spa-router";
  import api from "../utils/api";
  import Toast from "../components/Toast.svelte";

  let name = "user 1";
  let email = "user1@example.com";
  let password = "password123";
  let confirmPassword = "password123";
  let message = "";
  let isLoading = false;

  async function handleRegister() {
    isLoading = true;
    if (password !== confirmPassword) {
      message = "Passwords do not match.";
      return;
    }

    await api
      .post("/auth/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        message = res.data.message || "Success!";

        setTimeout(() => {
          push("/login");
        }, 1500);
      })
      .catch((err) => {
        if (err.response) {
          message =
            err.response.data.message ||
            "Registration failed. Please try again.";
        } else {
          message = "An error occurred. Please try again.";
        }
        console.error("err: ", err);
      })
      .finally(() => {
        isLoading = false;
        setTimeout(() => {
          message = "";
        }, 1500);
      });
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-base-200 p-3">
  <div class="card w-full max-w-md bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-3">Register</h2>

      {#if message}
        <Toast {message} />
      {/if}

      <!-- Name Input -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Name</legend>
        <input
          type="name"
          class="input w-full"
          bind:value={name}
          placeholder="Enter your name"
        />
      </fieldset>

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

      <!-- Confirm Password Input -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Confirm Password</legend>
        <input
          type="password"
          class="input w-full"
          bind:value={confirmPassword}
          placeholder="Confirm your password"
        />
      </fieldset>

      <!-- Register Button -->
      <div class="form-control mt-3">
        <button on:click={handleRegister} class="btn btn-primary w-full">
          Register
        </button>
      </div>

      <!-- Login Link -->
      <div class="text-center mt-4">
        <span class="text-sm">Already have an account? </span>
        <a href="#/login" class="link link-primary">Login</a>
      </div>
    </div>
  </div>
</div>
