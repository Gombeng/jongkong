<script>
  import Text from "../../components/Text.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  export let projects;
  let activeIndex;
  function handleToggle(index) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

{#if projects.length}
  <section id="work" class="hero">
    <div class="hero-content">
      <div>
        <Text variant="h1" addStyle="mb-5 md:mb-7 xl:mb-10">Projects</Text>

        {#each projects as project, index}
          <ProjectCard
            {...project}
            isChecked={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
          {#if index !== projects.length - 1}
            <div class="p-1"></div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
{/if}
