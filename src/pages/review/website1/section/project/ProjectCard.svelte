<script>
  import LinkItem from "../../components/LinkItem.svelte";
  import Text from "../../components/Text.svelte";

  export let title, desc, url, isChecked, onToggle;
</script>

<div class="collapse collapse-arrow border border-base-300">
  <input
    type="checkbox"
    bind:checked={isChecked}
    on:change={() => onToggle()}
  />
  <div class="collapse-title">
    <Text variant="h3" addStyle="">{title}</Text>
  </div>

  <div class="collapse-content text-sm">
    <Text variant="p" addStyle="mb-2 mt-3">{desc}</Text>
    <div class="flex gap-4 justify-end">
      <LinkItem href={url.demo} title="demo" />
      <LinkItem href={url.repo} title="repo" />
    </div>
  </div>
</div>
