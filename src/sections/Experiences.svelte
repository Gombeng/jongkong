<script>
  import { Pencil, Trash2 } from "@lucide/svelte";
  import Button from "../components/Button.svelte";

  export let experiences = [];

  let showForm = false;

  // Temporary variables to hold the form input values
  let position = "";
  let company = "";
  let start = "";
  let end = "";
  let locationName = "";
  let locationMaps = "";
  let tasks = [];

  // Temporary variable for a single task input
  let taskInput = "";

  // Function to handle form submission
  function addExperience() {
    if (
      position &&
      company &&
      start &&
      end &&
      locationName &&
      locationMaps &&
      tasks.length > 0
    ) {
      // Add the new experience to the list
      experiences = [
        ...experiences,
        {
          position,
          company,
          start,
          end,
          location: {
            name: locationName,
            maps: locationMaps,
          },
          tasks,
        },
      ];

      // Reset the form inputs
      position = "";
      company = "";
      start = "";
      end = "";
      locationName = "";
      locationMaps = "";
      tasks = [];

      // Hide the form
      showForm = false;
    }
  }

  // Function to add a task to the tasks array
  function addTask() {
    if (taskInput) {
      tasks = [...tasks, taskInput];
      taskInput = ""; // Clear the task input
    }
  }

  // Function to remove a task from the tasks array
  function removeTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
  }
</script>

<div class="flex justify-between pb-3">
  <h1>Experiences</h1>
  <Button onclick={() => (showForm = true)} title="Add" />
</div>

<!-- Form to Add a New Experience -->
{#if showForm}
  <div class="form-container pb-10">
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Position</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={position}
        placeholder="Position (e.g., Full-stack Developer)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Company</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={company}
        placeholder="Company (e.g., AIA Singapore)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Start Date</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={start}
        placeholder="Start Date (e.g., Mar 2023)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">End Date</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={end}
        placeholder="End Date (e.g., Present)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Location Name</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={locationName}
        placeholder="Location Name (e.g., Batam)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Location Maps URL</legend>
      <input
        type="url"
        class="input w-full"
        bind:value={locationMaps}
        placeholder="Location Maps URL (e.g., https://maps.app.goo.gl/...)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Tasks</legend>
      <div class="flex gap-2">
        <input
          type="text"
          class="input w-full"
          bind:value={taskInput}
          placeholder="Task (e.g., Developed frontend applications)"
        />
        <Button onclick={addTask} title="Add Task" />
      </div>
      <ul class="list">
        {#each tasks as task, index}
          <li class="list-row flex justify-between">
            <div>{task}</div>
            <div class="tooltip" data-tip="Delete">
              <button on:click={() => removeTask(index)}>
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        {/each}
      </ul>
    </fieldset>

    <div class="p-2"></div>
    <Button onclick={addExperience} title="Save" />
    <Button color="neutral" onclick={() => (showForm = false)} title="Cancel" />
  </div>
{/if}

<!-- Display the List of Experiences -->
{#if experiences}
  <ul class="list mb-3">
    {#each experiences as experience, index}
      <li class="list-row flex flex-col">
        <div class="flex justify-between">
          <div>
            <div class="font-bold">{experience.position}</div>
            <div class="text-sm opacity-80">
              {experience.location.name} | {experience.company}
            </div>
            <div class="text-sm opacity-60">
              {experience.start} - {experience.end}
            </div>
            <div class="text-sm opacity-60"></div>
          </div>
          <div>
            <div class="tooltip me-3" data-tip="Edit">
              <Pencil size={20} />
            </div>
            <div class="tooltip" data-tip="Delete">
              <Trash2 size={20} />
            </div>
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
{/if}
