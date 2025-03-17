<script>
  import Input from "../components/Input.svelte";
  import Textarea from "../components/Textarea.svelte";
  import { websiteData } from "../utils";
  import Links from "./Links.svelte";
</script>

<section class="pb-3">
  <h1>Hero section</h1>
  <Input label="Name" bind:value={$websiteData.hero.name} />
  <Input
    label="Position/Desired Position"
    bind:value={$websiteData.hero.role}
  />
  <Textarea label="Professional summary" bind:value={$websiteData.hero.desc} />
</section>

<Links bind:links={$websiteData.hero.links} />
