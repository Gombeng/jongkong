<script>
  import { push } from "svelte-spa-router";
  import api from "../utils/api";
  import Toast from "../components/Toast.svelte";
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";
  import { z } from "zod";

  let email = "";
  let password = "";
  let message = "";
  let isLoading = false;
  let errors = {};

  const schema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  function validateForm() {
    const result = schema.safeParse({ email, password });
    errors = result.success ? {} : result.error.format();
    return result.success;
  }

  async function handleLogin() {
    if (!validateForm()) return;
    isLoading = true;

    try {
      const res = await api.post("/auth/login", { email, password });
      message = res.data.message || "Success!";
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userData", JSON.stringify(res.data));
      setTimeout(() => push("/dashboard"), 1500);
    } catch (err) {
      message =
        err.response?.data?.message || "Login failed. Please try again.";
    } finally {
      isLoading = false;
      setTimeout(() => (message = ""), 1500);
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
      
      <Input
        label="Email"
        type="email"
        bind:value={email}
        error={errors.email?.["_errors"]?.[0]}
      />

      <Input
        label="Password"
        type="password"
        bind:value={password}
        error={errors.password?.["_errors"]?.[0]}
      />

      <Button onclick={handleLogin} title="Login" disabled={isLoading} />

      <div class="text-center mt-4">
        <span class="text-sm">Don't have an account? </span>
        <a href="#/register" class="link link-primary">Sign up</a>
      </div>
    </div>
  </div>
</div>
