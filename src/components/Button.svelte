<script>
  export let title = ""; // Default title
  export let color = "primary"; // Default color
  export let size = "sm"; // Default size
  export let disabled = false; // Default disabled state
  export let onclick = () => {}; // Default empty function for click handler
</script>

<button
  on:click={onclick}
  class={`btn btn-${color} btn-${size} ${disabled ? "btn-disabled" : ""}`}
  {disabled}
>
  {#if $$slots.icon}
    <span class="btn-icon">
      <slot name="icon"></slot>
    </span>
  {/if}
  {title}
</button>
