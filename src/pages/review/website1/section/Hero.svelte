<script>
  import LinkItem from "../components/LinkItem.svelte";
  import Text from "../components/Text.svelte";

  export let hero;
</script>

<section id="hero" class="hero">
  <div class="hero-content">
    <div>
      <Text variant="h2">
        {hero.role}
      </Text>
      <Text variant="h1">
        {hero.name}
      </Text>
      <Text variant="p" addStyle="pt-5">
        {hero.desc}
      </Text>

      <div class="flex flex-wrap gap-2 md:gap-4 xl:gap-6 mt-2 xl:mt-5">
        {#each hero.links as { title, link }}
          <LinkItem href={link} {title} />
        {/each}
      </div>
    </div>
  </div>
</section>
