<script>
  import Input from "../components/Input.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Textarea from "../components/Textarea.svelte";
  import api from "../utils/api";
  import Build from "./Build.svelte";
  import Review from "./Review.svelte";
  import Website1 from "./review/website1/Website1.svelte";

  // let websiteData,
  //   isWebsite = false,
  //   message = "";

  // async function fetchPersonalWeb() {
  //   try {
  //     const res = await api.get("/website");
  //     websiteData = res.data.data;
  //     isWebsite = true;
  //   } catch (err) {
  //     message =
  //       err.response?.data?.message || "An error occurred. Please try again.";
  //   }
  //   setTimeout(() => {
  //     message = "";
  //   }, 1500);
  // }
  // fetchPersonalWeb();

  import { writable } from "svelte/store";

  export const websiteData = writable({
    hero: { name: "", role: "", desc: "", links: [] },
    about: { experiences: [], education: [] },
    projects: [],
    techStacks: [],
  });
</script>

<section class="mx-auto">
  <Navbar />

  <div class="flex gap-5 p-5">
    <!-- left -->
    <div class="min-w-lg max-w-xl pb-3">
      <h1>Hero section</h1>
      <Input label="Name" bind:value={$websiteData.hero.name} />
      <Input
        label="Position/Desired Position"
        bind:value={$websiteData.hero.role}
      />
      <Textarea
        label="Professional summary"
        bind:value={$websiteData.hero.desc}
      />
    </div>

    <!-- right -->
    <div class="">
      <Website1 websiteData={$websiteData} />
    </div>
  </div>
</section>

<!-- 
<section class="mx-auto">
  <Navbar />
  <h1 class="pb-5 font-semibold">Jongkong</h1>

  <div class="flex gap-5 p-5">
    <Build {isWebsite} {message} {websiteData} />
    <Review {websiteData} />
  </div>
</section> -->

<!-- <section class="max-w-md mx-auto py-5">
  <h1 class="pb-5 font-semibold">Jongkong</h1>
  <div class="tabs tabs-lift">
    <input
      type="radio"
      name="tabs"
      class="tab"
      aria-label="Build"
      bind:group={activeTab}
      value="build"
    />
    <div class="tab-content border-base-300 bg-base-100 p-3">
      <Build />
    </div>

    <input
      type="radio"
      name="tabs"
      class="tab"
      aria-label="Review"
      bind:group={activeTab}
      value="review"
    />
    <div class="tab-content border-base-300 bg-base-100 p-3">
      <Review />
    </div>
  </div>

  <div class="p-3"></div>
  <Button title="Save/Update" />
</section> -->
