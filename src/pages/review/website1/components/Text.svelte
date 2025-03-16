<script>
  export let variant = "h1";
  export let addStyle = "";
  export let pw = "semibold";

  const variants = {
    h1: "text-3xl sm:text-4xl md:text-[57px] xl:text-8xl font-black",
    h2: "text-2xl md:text-4xl xl:text-6xl font-bold",
    h3: "text-xl md:text-2xl xl:text-4xl font-semibold",
    p: `text-md md:text-xl xl:text-3xl font-${pw}`,
  };

  // @ts-ignore
  const tagClass = variants[variant] || variants.h1;
</script>

<svelte:element this={variant} class="{tagClass} {addStyle}">
  <slot />
</svelte:element>
