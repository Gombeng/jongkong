<script>
  export let label = "";
  export let value = "";
</script>

<fieldset class="fieldset">
  <legend class="fieldset-legend">{label}</legend>
  <textarea class="textarea h-24 w-full" placeholder="Type here" bind:value
  ></textarea>
</fieldset>
