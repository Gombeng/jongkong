<script>
  import Input from "../components/Input.svelte";
  import Textarea from "../components/Textarea.svelte";
  import Links from "./Links.svelte";

  export let heroData = {};
  export let updateField = (field, val) => {};
</script>

<section class="pb-3">
  <h1>Hero section</h1>
  <Input
    label="Name"
    value={heroData.name}
    onChange={(val) => updateField("name", val)}
  />
  <Input
    label="Position/Desired Position"
    value={heroData.role}
    onChange={(val) => updateField("role", val)}
  />
  <Textarea
    label="Professional summary"
    value={heroData.desc}
    onChange={(val) => updateField("desc", val)}
  />
</section>

<Links bind:links={heroData.links} />
