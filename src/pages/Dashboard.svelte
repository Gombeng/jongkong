<script>
  import Navbar from "../components/Navbar.svelte";
  import Toast from "../components/Toast.svelte";
  import Hero from "../sections/Hero.svelte";
  import Experiences from "../sections/Experiences.svelte";
  import Projects from "../sections/Projects.svelte";
  import { websiteData } from "../utils";
  import api from "../utils/api";
  import Website1 from "./review/website1/Website1.svelte";
  import Button from "../components/Button.svelte";
  import Techstack from "../sections/Techstack.svelte";

  let message = "";
  let errorMessage = "";
  let isWebsite = false;
  let isLoading = false;

  $: console.log("websiteData: ", $websiteData);

  async function fetchWebsiteData() {
    try {
      let res = await api.get("/website");
      if (res.status !== 404) isWebsite = true;
      websiteData.set(res.data.data);
      websiteData.subscribe((value) => {
        webPayload = value;
      })();
    } catch (error) {
      webPayload = $websiteData;
      console.error("Failed to fetch website data:", error);
    }
  }

  let webPayload;

  async function handleSubmit() {
    if (
      !webPayload ||
      !webPayload.hero?.name.trim() ||
      !webPayload.hero?.role.trim() ||
      !webPayload.hero?.desc.trim()
    ) {
      errorMessage = "Please at least fill name, position and summary field!";
      return;
    }

    try {
      isLoading = true;
      let res;
      if (isWebsite) {
        res = await api.put("/website", webPayload);
        message = res.data.message || "Success!";
      } else {
        res = await api.post("/website", webPayload);
      }
    } catch (error) {
      errorMessage =
        error.response?.data?.message || "Failed to save website data.";
    } finally {
      isLoading = false;
      setTimeout(() => {
        message = "";
        errorMessage = "";
      }, 2000);
    }
  }

  fetchWebsiteData();
</script>

{#if message}
  <Toast {message} />
{/if}

<section class="mx-auto">
  <Navbar />

  <div class="flex gap-5 p-5 justify-center">
    <!-- left -->
    <div class=" max-w-md">
      <Hero />
      <Experiences bind:experiences={$websiteData.about.experiences} />
      <Projects bind:projects={$websiteData.projects} />
      <Techstack bind:techStacks={$websiteData.techStacks} />

      {#if errorMessage}
        <p class="text-red-500 mt-2">{errorMessage}</p>
      {/if}

      <div class="p-4"></div>

      <Button onclick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Saving..." : isWebsite ? "Update" : "Save"}
      </Button>
    </div>

    <!-- right -->
    <div class="w-full">
      <h1>Preview</h1>
      <Website1 />
    </div>
  </div>
</section>
