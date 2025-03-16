<script>
  export let title, options;
</script>

<fieldset class="fieldset">
  <legend class="fieldset-legend">{title}</legend>
  <select class="select">
    <option disabled selected>Pick a Theme</option>
    {#each options as option}
      <option>{option}</option>
    {/each}
  </select>
</fieldset>
