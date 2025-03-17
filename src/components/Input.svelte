<script>
  export let label = "";
  export let value = "";
  export let type = "text";
  export let error= false;
  export let placeholder = "Type here";
</script>

<div>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">{label}</legend>
    <input {type} class="input w-full" {placeholder} bind:value />
    <slot />
  </fieldset>

  {#if error}
    <p class="text-red-500 text-sm">{error}</p>
  {/if}
</div>
