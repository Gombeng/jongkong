<script>
  import { websiteData } from "../../../utils";
  import Experience from "./section/experience/Experience.svelte";
  import Hero from "./section/Hero.svelte";
  import Project from "./section/project/Project.svelte";
  import Techstack from "./section/techstack/Techstack.svelte";

  $: ({
    hero,
    about: { experiences, education },
    projects,
    techStacks,
  } = $websiteData);
</script>

{#if $websiteData.hero.name === ""}
  <h1>Start creating your own website, fill "name" form to see the preview!</h1>
{:else}
  <div data-theme={"cupcake"}>
    <main
      class="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto"
    >
      <Hero {hero} />
      <Experience {experiences} />
      <Project {projects} />
      <Techstack {techStacks} />
    </main>

    <footer
      id="footer"
      class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"
    >
      <aside>
        <p>Copyright © 2025 - All right reserved by {hero.name}</p>
      </aside>
    </footer>
  </div>
{/if}
