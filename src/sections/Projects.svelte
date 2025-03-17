<script>
  import { Pencil, Trash2 } from "@lucide/svelte";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";

  export let projects;

  let showForm = false;
  let title = "";
  let desc = "";
  let repoUrl = "";
  let demoUrl = "";
  let editIndex = null;

  function addOrUpdateProject() {
    if (title && desc && repoUrl && demoUrl) {
      const newProject = {
        title,
        desc,
        url: { repo: repoUrl, demo: demoUrl },
      };

      if (editIndex !== null) {
        projects[editIndex] = newProject;
      } else {
        projects = [...projects, newProject];
      }

      resetForm();
    }
  }

  function editProject(index) {
    editIndex = index;
    let project = projects[index];
    title = project.title;
    desc = project.desc;
    repoUrl = project.url.repo;
    demoUrl = project.url.demo;
    showForm = true;
  }

  function deleteProject(index) {
    if (confirm("Delete this project?")) {
      projects = projects.filter((_, i) => i !== index);
    }
  }

  function resetForm() {
    title = "";
    desc = "";
    repoUrl = "";
    demoUrl = "";
    editIndex = null;
    showForm = false;
  }
</script>

<div class="flex justify-between pb-3">
  <h1>Projects</h1>
  <Button onclick={() => (showForm = true)} title="Add" />
</div>

{#if showForm}
  <div class="form-container pb-10">
    <Input label="Title" bind:value={title} placeholder="Title (e.g., Cashk)" />
    <Input
      label="Description"
      bind:value={desc}
      placeholder="Description (e.g., A personal finance tracker)"
    />
    <Input
      label="Repository URL"
      bind:value={repoUrl}
      placeholder="Repository URL (e.g., https://github.com/yourusername/cashk)"
    />
    <Input
      label="Demo URL"
      bind:value={demoUrl}
      placeholder="Demo URL (e.g., https://cashk.vercel.app/)"
    />
    <div class="p-2"></div>
    <Button
      onclick={addOrUpdateProject}
      title={editIndex !== null ? "Update" : "Save"}
    />
    <Button color="neutral" onclick={resetForm} title="Cancel" />
  </div>
{/if}

{#if projects}
  <ul class="list mb-3">
    {#each projects as project, index}
      <li class="list-row flex justify-between">
        <div>
          <div class="font-bold">{project.title}</div>
          <div class="text-sm opacity-80 max-w-79">{project.desc}</div>
          <div class="text-sm opacity-60">
            <a href={project.url.repo} target="_blank" class="link">
              Repository
            </a>
            <span class="mx-2">|</span>
            <a href={project.url.demo} target="_blank" class="link"> Demo </a>
          </div>
        </div>
        <div class="flex gap-2">
          <Button color="neutral" onclick={() => editProject(index)}>
            <Pencil size={20} />
          </Button>
          <Button color="neutral" onclick={() => deleteProject(index)}>
            <Trash2 size={20} />
          </Button>
        </div>
      </li>
    {/each}
  </ul>
{/if}
