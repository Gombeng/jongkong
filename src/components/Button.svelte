<script>
  export let title = "";
  export let color = "primary";
  export let size = "sm";
  export let disabled = false;
  export let addClass = "";
  export let onclick = () => {};
</script>

<button
  on:click={onclick}
  class={`btn btn-${color} btn-${size} ${disabled ? "btn-disabled" : ""} ${addClass}`}
  {disabled}
>
  <slot />
  {title}
</button>
