<script>
  import Text from "../../components/Text.svelte";
  import ExpCard from "./ExpCard.svelte";
  export let experiences;
</script>

{#if experiences.length}
  <section id="experiences" class="hero">
    <div class="hero-content">
      <div>
        <Text variant="h1" addStyle="mb-5 md:mb-7 xl:mb-10">Experiences</Text>
        {#each experiences as exp, index}
          <ExpCard {exp} />

          {#if index !== experiences.length - 1}
            <div class="mb-5 xl:mb-10"></div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
{/if}
