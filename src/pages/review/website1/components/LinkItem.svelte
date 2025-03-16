<script>
  import Text from "./Text.svelte";
  import { Link2 } from "@lucide/svelte";

  export let href,
    title,
    addStyle = "";
</script>

<a
  {href}
  target="_blank"
  class={`link link-warning flex items-center ${addStyle}`}
>
  <Text variant="p">{title}</Text>
  <Link2 />
</a>
