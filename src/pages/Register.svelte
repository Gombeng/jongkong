<script>
  import { push } from "svelte-spa-router";
  import api from "../utils/api";
  import Toast from "../components/Toast.svelte";
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";
  import { z } from "zod";

  let name = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  let message = "";
  let isLoading = false;
  let errors = {};

  const schema = z
    .object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email format"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  function validateForm() {
    const result = schema.safeParse({ name, email, password, confirmPassword });
    errors = result.success ? {} : result.error.format();
    return result.success;
  }

  async function handleRegister() {
    if (!validateForm()) return;
    isLoading = true;

    try {
      const res = await api.post("/auth/register", { name, email, password });
      message = res.data.message || "Success!";
      setTimeout(() => push("/login"), 1500);
    } catch (err) {
      message =
        err.response?.data?.message || "Registration failed. Please try again.";
    } finally {
      isLoading = false;
      setTimeout(() => (message = ""), 1500);
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-base-200 p-3">
  <div class="card w-full max-w-md bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-2xl font-bold mb-3">Register</h2>

      {#if message}
        <Toast {message} />
      {/if}

      <Input
        label="Name"
        bind:value={name}
        error={errors.name?._errors[0]}
        placeholder="Enter your name"
      />
      <Input
        label="Email"
        bind:value={email}
        error={errors.email?._errors[0]}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        type="password"
        bind:value={password}
        error={errors.password?._errors[0]}
        placeholder="Enter your password"
      />
      <Input
        label="Confirm Password"
        type="password"
        bind:value={confirmPassword}
        error={errors.confirmPassword?._errors[0]}
        placeholder="Confirm your password"
      />

      <Button onclick={handleRegister} title="Register" />

      <div class="text-center mt-4">
        <span class="text-sm">Already have an account? </span>
        <a href="#/login" class="link link-primary">Login</a>
      </div>
    </div>
  </div>
</div>
