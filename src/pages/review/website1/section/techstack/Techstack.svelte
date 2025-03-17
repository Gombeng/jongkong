<script>
  import Text from "../../components/Text.svelte";
  import TechstackItem from "./TechstackItem.svelte";

  export let techStacks;
</script>

{#if techStacks.length}
  <section id="tech-stack" class="hero py-5">
    <div class="hero-content gap-5 flex-col">
      <div>
        <Text variant="h3">Tech & Tools</Text>
      </div>
      <div class="flex flex-wrap justify-center gap-1 md:gap-2 mx-auto">
        {#each techStacks as item}
          <TechstackItem {item} />
        {/each}
      </div>
    </div>
  </section>
{/if}
