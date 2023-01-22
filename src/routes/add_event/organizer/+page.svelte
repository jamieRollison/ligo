<script>
  import { createForm } from "svelte-forms-lib";
  import SEO from "$lib/components/SEO.svelte";
  import states from "$lib/states";

  const { form, errors, handleChange } = createForm({
    initialValues: {
      name: "",
      location: "",
      start_date: Date(),
      attendance: 0,
      food: "", // Yes or No
      servings: 0,
      pre_order: "", // Yes or No
      vegitarian: "", // Yes or No
      cutlery: "",
      single_use: "",
      single_use_container: "",
      compost: "",
      plan_to_attend: 0,
    },
    validate: (values) => {
      let errs = {};
      if (values.name === "") {
        errs["name"] = "Name of the event is required!";
      }
      if (values.location === "") {
        errs["state"] = "State is required!";
      }
      return errs;
    },
    onSubmit: (values) => {},
  });
</script>

<SEO title="Add your new Event" />

<div class="my-10 md:mx-40 lg:mx-60">
  <div>
    <h1 class="font-Jomhuria text-6xl text-white flex justify-center">
      Add your event
    </h1>
  </div>

  <form method="POST">
    <div class="flex flex-col">
      <label class="font-WorkSans text-white" for="name"
        >What is the name of your event?</label
      >
      <input
        class="font-WorkSans text-black rounded-sm h-7"
        id="name"
        name="name"
        on:change={handleChange}
        bind:value={$form.name}
      />
    </div>
    {#if $errors.name}
      <small class="font-WorkSans text-red-500">{$errors.name}</small>
    {/if}
    <div class="flex flex-col mt-4">
      <label class="font-WorkSans text-white" for="location"
        >In what U.S. state is your event located?
      </label>
      <select
        class="font-WorkSans text-black rounded-sm h-7"
        id="location"
        name="location"
        on:change={handleChange}
        bind:value={$form.location}
      >
        <option />
        {#each states as state}
          <option>{state.state}</option>
        {/each}
      </select>
    </div>
    {#if $errors.location}
      <small class="font-WorkSans text-red-500">{$errors.location}</small>
    {/if}

    <div class="flex flex-col mt-4">
      <label class="font-WorkSans text-white" for="start_date"
        >When was your event held? (if it ran for multiple days, pick the
        earliest)</label
      >
      <input
        class="font-WorkSans text-black rounded-sm h-7"
        id="start_date"
        name="start_date"
        type="date"
        on:change={handleChange}
        bind:value={$form.start_date}
      />
    </div>
    <div class="flex flex-col mt-3">
      <label class="font-WorkSans text-white" for="attendance"
        >How many attendees were present at the event?</label
      >
      <input
        class="font-WorkSans text-black rounded-sm h-7"
        id="attendance"
        name="attendance"
        on:change={handleChange}
        bind:value={$form.attendance}
      />
    </div>
    {#if $errors.attendance}
      <small class="font-WorkSans text-red-500">{$errors.attendance}</small>
    {/if}

    <div class="flex flex-col mt-4">
      <label class="font-WorkSans text-white" for="food"
        >Did your event provide food?
      </label>
      <select
        class="font-WorkSans text-black rounded-sm h-8"
        id="food"
        name="food"
        on:change={handleChange}
        bind:value={$form.food}
      >
        <option />
        <option>Yes</option>
        <option>No</option>
      </select>
      {#if $form.food === "Yes"}
        <div
          class="bg-cyan-100 border-blue-200 border-2 bg-opacity-20 mt-4 rounded-md p-3 flex flex-col"
        >
          <label class="font-WorkSans text-gray-600 mb-1" for="servings"
            >How many servings of food were provided per person?
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-7"
            id="servings "
            name="servings"
            on:change={handleChange}
            bind:value={$form.servings}
          >
            <option />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

          <label class="font-WorkSans text-gray-600 mt-3" for="cutlery"
            >Was cutlery provided at the event? (forks, spoons, knives)
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-7 "
            id="cutlery"
            name="cutlery"
            on:change={handleChange}
            bind:value={$form.cutlery}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>

          <label class="font-WorkSans text-gray-600 mt-2" for="single_use"
            >Were the meals served on single-use plates and cutlery?
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-7"
            id="single_use"
            name="single_use"
            on:change={handleChange}
            bind:value={$form.single_use}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>

          <label class="font-WorkSans text-gray-600 mt-3" for="pre_order"
            >Did your event ask for preferences to preorder food ahead of time?
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-7"
            id="pre_order"
            name="pre_order"
            on:change={handleChange}
            bind:value={$form.pre_order}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>

          <label class="font-WorkSans text-gray-600 mt-3" for="vegitarian"
            >Did your event offer vegetarian options?
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-7"
            id="vegitarian"
            name="vegitarian"
            on:change={handleChange}
            bind:value={$form.vegitarian}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>

          <label
            class="font-WorkSans text-gray-600 mt-2"
            for="single_use_container"
            >Was the catering served in single-use containers?
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-7"
            id="single_use_container"
            name="single_use_container"
            on:change={handleChange}
            bind:value={$form.single_use_container}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      {/if}

      <div class="flex flex-col mt-4">
        <label class="font-WorkSans text-white" for="compost"
          >Were there easily accessible recycling/compost bins?
        </label>
        <select
          class="font-WorkSans text-black rounded-sm h-7"
          id="compost"
          name="compost"
          on:change={handleChange}
          bind:value={$form.compost}
        >
          <option />
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      <div class="flex flex-col mt-3">
        <label class="font-WorkSans text-white" for="plan_to_attend"
          >How many people did you plan to attend the Event?</label
        >
        <input
          class="font-WorkSans text-black rounded-sm h-8"
          id="plan_to_attend"
          name="plan_to_attend"
          on:change={handleChange}
          bind:value={$form.plan_to_attend}
        />
      </div>
    </div>
    <div class="flex flex-col items-center mt-4">
      <button
        class="font-WorkSans bg-none border-white border-2 text-white hover:bg-white hover:text-teal-500 w-40 rounded-sm py-2"
        type="submit">Submit</button
      >
    </div>
  </form>
</div>
