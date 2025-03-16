<script>
  import { Pencil, Trash2 } from "@lucide/svelte";
  import Button from "../components/Button.svelte";

  export let projects = [];

  // Track whether the form is visible
  let showForm = false;

  // Temporary variables to hold the form input values
  let title = "";
  let desc = "";
  let repoUrl = "";
  let demoUrl = "";

  // Function to handle form submission
  function addProject() {
    if (title && desc && repoUrl && demoUrl) {
      // Add the new project to the list
      projects = [
        ...projects,
        {
          title,
          desc,
          url: {
            repo: repoUrl,
            demo: demoUrl,
          },
        },
      ];

      // Reset the form inputs
      title = "";
      desc = "";
      repoUrl = "";
      demoUrl = "";

      // Hide the form
      showForm = false;
    }
  }
</script>

<div class="flex justify-between pb-3">
  <h1>Projects</h1>
  <Button onclick={() => (showForm = true)} title="Add" />
</div>

<!-- Form to Add a New Project -->
{#if showForm}
  <div class="form-container pb-10">
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Title</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={title}
        placeholder="Title (e.g., Cashk)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Description</legend>
      <textarea
        class="input w-full"
        bind:value={desc}
        placeholder="Description (e.g., A personal finance tracker)"
      ></textarea>
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Repository URL</legend>
      <input
        type="url"
        class="input w-full"
        bind:value={repoUrl}
        placeholder="Repository URL (e.g., https://github.com/yourusername/cashk)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Demo URL</legend>
      <input
        type="url"
        class="input w-full"
        bind:value={demoUrl}
        placeholder="Demo URL (e.g., https://cashk.vercel.app/)"
      />
    </fieldset>

    <div class="p-2"></div>
    <Button onclick={addProject} title="Save" />
    <Button color="neutral" onclick={() => (showForm = false)} title="Cancel" />
  </div>
{/if}

<!-- Display the List of Projects -->
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
        <div>
          <div class="tooltip me-3" data-tip="Edit">
            <Pencil size={20} />
          </div>
          <div class="tooltip" data-tip="Delete">
            <Trash2 size={20} />
          </div>
        </div>
      </li>
    {/each}
  </ul>
{/if}
