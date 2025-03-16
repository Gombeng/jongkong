<script lang="ts">
  import LinkItem from "./LinkItem.svelte";
  import Text from "./Text.svelte";


  export let tasks = [
    "Officia, animi impedit quaerat eum voluptates necessitatibus fugit ad ipsa itaque esse.",
    "Autem aperiam itaque totam quis magnam harum.",
    "Dignissimos dicta sunt error officiis? Aspernatur praesentium ducimus illo vero!.",
  ];
  export let position = "Full-stack Developer";
  export let company = "Company";
  export let location = { maps: "https://maps.google.com/", name: "Location" };
  export let start = "Date start";
  export let end = "Date end / Present";
</script>

<div>
  <Text variant="h2" addStyle="lg:mb-2">{position}</Text>
  <div class="lg:flex justify-between">
    <Text variant="p" pw="bold">{start} - {end}</Text>
    <LinkItem
      href={location.maps}
      title={`${company} - ${location.name}`}
      addStyle="mb-3 md:mb-5 xl:mb-10"
    />
  </div>

  {#each tasks as task}
    <ul class="list-disc ms-5">
      <li>
        <Text variant="p" addStyle="mb-2 md:mb-4 xl:mb-6">{task}</Text>
      </li>
    </ul>
  {/each}
</div>
