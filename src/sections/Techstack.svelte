<script>
  import { Pencil, Trash2 } from "@lucide/svelte";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";

  export let techStacks = [];

  let showForm = false;
  let editIndex = null;
  let name = "";

  function addOrUpdateTech() {
    if (!name.trim()) return;

    if (editIndex !== null) {
      techStacks[editIndex] = name;
      techStacks = [...techStacks];
    } else {
      techStacks = [...techStacks, name];
    }

    resetForm();
  }

  function deleteTech(index) {
    if (confirm("Delete this tech stack?")) {
      techStacks = techStacks.filter((_, i) => i !== index);
    }
  }

  function editTech(index) {
    editIndex = index;
    name = techStacks[index];
    showForm = true;
  }

  function resetForm() {
    name = "";
    editIndex = null;
    showForm = false;
  }
</script>

<div class="flex justify-between items-center">
  <h1 class="text-xl font-semibold">Tech & Tools</h1>
  <Button onclick={() => (showForm = true)} title="Add" />
</div>

{#if showForm}
  <div class="form-container mt-3">
    <Input
      label="Tech Name"
      bind:value={name}
      placeholder="e.g. JavaScript, MongoDB, React"
    />
    <div class="flex gap-3 mt-2">
      <Button
        onclick={addOrUpdateTech}
        title={editIndex !== null ? "Update" : "Save"}
      />
      <Button color="neutral" onclick={resetForm} title="Cancel" />
    </div>
  </div>
{/if}

<ul class="list mt-3">
  {#each techStacks as tech, index}
    <li class="list-row flex justify-between py-2 border-b">
      <span>{tech}</span>
      <div class="flex gap-3">
        <Button color="ghost" onclick={() => editTech(index)}>
          <Pencil size={20} />
        </Button>
        <Button color="danger" onclick={() => deleteTech(index)}>
          <Trash2 size={20} />
        </Button>
      </div>
    </li>
  {/each}
</ul>
