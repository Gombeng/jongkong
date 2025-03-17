<script>
  export let item;
</script>

<div class="card bg-base-300 shadow-sm">
  <div class="card-body p-2 md:p-4 lg:p-6">
    <img
      alt={item}
      title={item}
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
      class="w-full max-w-6 xl:max-w-15 2xl:max-w-20"
    />
  </div>
</div>
