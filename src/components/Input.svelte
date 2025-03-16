<script>
  export let label = "";
  export let value = "";
  export let placeholder = "Type here";
</script>

<div>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">{label}</legend>
    <input type="text" class="input w-full" {placeholder} bind:value />
  </fieldset>
</div>
