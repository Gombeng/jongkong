<script>
  import Text from "../../components/Text.svelte";

  export let exp;
</script>

<div>
  <Text variant="h2" addStyle="lg:mb-2">{exp.position}</Text>
  <div class="lg:flex justify-between gap-3 pb-3">
    <Text variant="p" fw="bold">{exp.company} - {exp.location}</Text>
    <Text variant="p" fw="bold">{exp.start} - {exp.end}</Text>
  </div>

  {#each exp.tasks as task}
    <ul class="list-disc ms-5">
      <li>
        <Text variant="p" addStyle="mb-2 md:mb-4 xl:mb-6">{task}</Text>
      </li>
    </ul>
  {/each}
</div>
