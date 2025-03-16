<script>
  import { Pencil, Trash2 } from "@lucide/svelte";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";

  export let links = [];

  let showForm = false;
  let editIndex = null;
  let title = "";
  let link = "";

  function updateField(field, value) {
    if (field === "title") {
      title = value;
    } else if (field === "link") {
      link = value;
    }
  }

  function addOrUpdateLink() {
    if (!title || !link) return;

    if (editIndex !== null) {
      links[editIndex] = { title, link };
    } else {
      links = [...links, { title, link }];
    }

    resetForm();
  }

  function deleteLink(index) {
    let isConfirm = confirm("Delete link?");
    if (isConfirm) {
      links = links.filter((_, i) => i !== index);
    }
  }

  function editLink(index) {
    editIndex = index;
    title = links[index].title;
    link = links[index].link;
    showForm = true;
  }

  function resetForm() {
    title = "";
    link = "";
    editIndex = null;
    showForm = false;
  }
</script>

<div class="flex justify-between">
  <h1>Links</h1>
  <Button onclick={() => (showForm = true)} title="Add" />
</div>

{#if showForm}
  <div class="form-container">
    <Input
      label="Title"
      value={title}
      placeholder="e.g. CV, Linkedin, X."
      onChange={(val) => updateField("title", val)}
    />
    <Input
      label="Link"
      value={link}
      placeholder="e.g. username-linkedin.com"
      onChange={(val) => updateField("link", val)}
    />
    <div class="p-2"></div>
    <Button
      onclick={addOrUpdateLink}
      title={editIndex !== null ? "Update" : "Save"}
    />
    <Button color="neutral" onclick={resetForm} title="Cancel" />
  </div>
{/if}

<ul class="list mb-3">
  {#each links as link, index}
    <li class="list-row flex justify-between">
      <div>
        <div>{link.title}</div>
        <a
          href={link.link}
          target="_blank"
          class="text-xs link font-semibold opacity-60"
        >
          {link.link}
        </a>
      </div>
      <div class="flex gap-3">
        <button class="tooltip" data-tip="Edit" onclick={() => editLink(index)}>
          <Pencil size={20} />
        </button>
        <button
          class="tooltip"
          data-tip="Delete"
          onclick={() => deleteLink(index)}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </li>
  {/each}
</ul>
