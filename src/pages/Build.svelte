<script>
  import Toast from "../components/Toast.svelte";
  import Educations from "../sections/Educations.svelte";
  import Experiences from "../sections/Experiences.svelte";
  import Hero from "../sections/Hero.svelte";
  import Links from "../sections/Links.svelte";
  import Projects from "../sections/Projects.svelte";

  import api from "../utils/api";

  export let message = "",
    isWebsite = false,
    websiteData = {
      hero: {
        name: "",
        role: "",
        desc: "",
        links: [],
      },
      about: {
        experiences: [],
        education: [],
      },
      projects: [],
    };

  function updateField(field, value) {
    websiteData.hero = { ...websiteData.hero, [field]: value };
  }

  async function handleSubmit() {
    if (!websiteData) return;
    try {
      let res;
      if (isWebsite) {
        res = await api.put("/website", websiteData);
      } else {
        res = await api.post("/website", websiteData);
      }
      message = res.data.message;
      window.location.reload();
    } catch (error) {
      console.error("error: ", error);
    }
    setTimeout(() => {
      message = "";
    }, 1500);
  }
</script>

{#if message}
  <Toast {message} />
{/if}

<section class="min-w-lg max-w-xl p-3">
  <h1 class="pb-5 font-semibold">Build</h1>

  <div class="min-w-lg max-w-xl">
    <Hero bind:heroData={websiteData.hero} {updateField} />
    <!-- 
    <Experiences experiences={websiteData.about.experiences} />
    <Educations educations={websiteData.about.education} />
    <Projects projects={websiteData.projects} /> -->
  </div>
  <button type="submit" on:click={handleSubmit} class="btn btn-primary mt-5">
    {isWebsite ? "Update" : "Save"}
  </button>
</section>
