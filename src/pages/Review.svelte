<script>
  import Website1 from "./review/website1/Website1.svelte";
  export let websiteData = null;
</script>

<section class="w-full p-3">
  <h1 class="pb-5 font-semibold">Review</h1>

  {#if websiteData}
    <Website1 {websiteData} />
  {:else}
    <h1>You not yet have your personal website</h1>
    <h1>Let's start <strong>build</strong> one!</h1>
  {/if}
</section>
