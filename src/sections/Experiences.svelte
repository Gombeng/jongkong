<script>
  import { Pencil, Trash2 } from "@lucide/svelte";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";

  export let experiences = [];

  let showForm = false;
  let editIndex = null;
  let taskInput = "";

  let position = "";
  let company = "";
  let start = "";
  let end = "";
  let location = "";
  let tasks = [];

  function addOrUpdateExperience() {
    if (!position || !company || !start || !end || !location) return;

    if (editIndex !== null) {
      experiences[editIndex] = {
        position,
        company,
        start,
        end,
        location,
        tasks,
      };
    } else {
      experiences = [
        ...experiences,
        { position, company, start, end, location, tasks },
      ];
    }

    resetForm();
  }

  function deleteExperience(index) {
    if (confirm("Delete this experience?")) {
      experiences = experiences.filter((_, i) => i !== index);
    }
  }

  function editExperience(index) {
    let exp = experiences[index];
    position = exp.position;
    company = exp.company;
    start = exp.start;
    end = exp.end;
    location = exp.location;
    tasks = [...exp.tasks];
    editIndex = index;
    showForm = true;
  }

  function resetForm() {
    position = "";
    company = "";
    start = "";
    end = "";
    location = "";
    tasks = [];
    taskInput = "";
    editIndex = null;
    showForm = false;
  }

  function addTask() {
    if (taskInput) {
      tasks = [...tasks, taskInput];
      taskInput = "";
    }
  }

  function removeTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
  }
</script>

<div class="flex justify-between pb-3">
  <h1>Experiences</h1>
  <Button onclick={() => (showForm = true)} title="Add" />
</div>

{#if showForm}
  <div class="form-container pb-10">
    <Input
      label="Position"
      bind:value={position}
      placeholder="Position (e.g., Full-stack Developer)"
    />
    <Input label="Company" bind:value={company} placeholder="Company Name" />
    <Input label="Start" bind:value={start} placeholder="Start Year" />
    <Input label="End" bind:value={end} placeholder="End Year" />
    <Input label="Location" bind:value={location} placeholder="Location" />

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Tasks</legend>
      <div class="flex gap-2">
        <input
          type="text"
          class="input w-full"
          bind:value={taskInput}
          placeholder="Task description"
        />
        <Button title="Add Task" onclick={addTask} />
      </div>
      <ul class="list">
        {#each tasks as task, index}
          <li class="list-row flex justify-between">
            <div>{task}</div>
            <Button color="neutral" onclick={() => removeTask(index)}>
              <Trash2 size={16} />
            </Button>
          </li>
        {/each}
      </ul>
    </fieldset>

    <div class="p-2"></div>
    <Button
      title={editIndex !== null ? "Update" : "Save"}
      onclick={addOrUpdateExperience}
    />
    <Button color="neutral" title="Cancel" onclick={resetForm} />
  </div>
{/if}

<ul class="list mb-3">
  {#each experiences as experience, index}
    <li class="list-row flex flex-col">
      <div class="flex justify-between">
        <div>
          <div class="font-bold">{experience.position}</div>
          <div class="text-sm opacity-80">
            {experience.location} | {experience.company}
          </div>
          <div class="text-sm opacity-60">
            {experience.start} - {experience.end}
          </div>
        </div>
        <div class="flex gap-2">
          <Button color="primary" onclick={() => editExperience(index)}>
            <Pencil size={20} />
          </Button>
          <Button color="error" onclick={() => deleteExperience(index)}>
            <Trash2 size={20} />
          </Button>
        </div>
      </div>
      <ul class="list-disc pl-5">
        {#each experience.tasks as task}
          <li class="text-sm opacity-80">{task}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
