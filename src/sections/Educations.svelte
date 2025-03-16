<script>
  import { Pencil, Trash2 } from "@lucide/svelte";
  import Button from "../components/Button.svelte";

  export let educations = [];

  // Track whether the form is visible
  let showForm = false;

  // Temporary variables to hold the form input values
  let start = "";
  let end = "";
  let level = "";

  // Function to handle form submission
  function addEducation() {
    if (start && end && level) {
      // Add the new education entry to the list
      educations = [...educations, { start, end, level }];

      // Reset the form inputs
      start = "";
      end = "";
      level = "";

      // Hide the form
      showForm = false;
    }
  }
</script>

<div class="flex justify-between pb-3">
  <h1>Education</h1>
  <Button onclick={() => (showForm = true)} title="Add" />
</div>

<!-- Form to Add a New Education Entry -->
{#if showForm}
  <div class="form-container pb-10">
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Start Year</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={start}
        placeholder="Start Year (e.g., 2015)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">End Year</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={end}
        placeholder="End Year (e.g., 2018)"
      />
    </fieldset>

    <fieldset class="fieldset">
      <legend class="fieldset-legend">Level</legend>
      <input
        type="text"
        class="input w-full"
        bind:value={level}
        placeholder="Level (e.g., High School)"
      />
    </fieldset>

    <div class="p-2"></div>
    <Button onclick={addEducation} title="Save" />
    <Button color="neutral" onclick={() => (showForm = false)} title="Cancel" />
  </div>
{/if}

<!-- Display the List of Education Entries -->
{#if educations}
  <ul class="list mb-3">
    {#each educations as education, index}
      <li class="list-row flex justify-between">
        <div>
          <div class="font-bold">{education.level}</div>
          <div class="text-sm opacity-80">
            {education.start} - {education.end}
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
