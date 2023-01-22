<script>
  import { createForm } from "svelte-forms-lib";
  import SEO from "$lib/components/SEO.svelte";
  import { isAuthenticated } from "../../../store";
  import { current_event } from "$lib/stores/events";

  const { form, handleChange } = createForm({
    initialValues: {
      name: `${$current_event.name}`,
      location: `${$current_event.location}`,
      startDate: `${$current_event.start_date}`,
      attendance: 0,
      swag: "", //Yes or No
      food: "", // Yes or No
      shirt: "", // Yes or No
      sweater: "", // Yes or No
      paper: "", // Yes or No
      servings: 0,
      pre_order: "", // Yes or No
      vegitarian: "", // Yes or No
      clothing_distribution: "",
      cutlery: "",
      single_use: "",
      single_use_container: "",
      compost: "",
      plan_to_attend: 0,
      shirts: 0,
      stickers: 0,
    },
    onSubmit: (values) => {},
  });
</script>

<SEO title={`Review this event`} />

<div class="my-10 md:mx-40 lg:mx-60">
  <div>
    <h1 class="font-Jomhuria text-6xl text-white flex justify-center">
      Review {$current_event.name}
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
        disabled
        on:change={handleChange}
        bind:value={$form.name}
      />
    </div>

    <div class="flex flex-col mt-4">
      <label class="font-WorkSans text-white" for="startDate"
        >When was your event held? (if it ran for multiple days, pick the
        earliest)</label
      >
      <input
        class="font-WorkSans text-black rounded-sm h-7"
        id="startDate"
        name="startDate"
        type="date"
        disabled
        on:change={handleChange}
        bind:value={$form.startDate}
      />
    </div>

    <div class="flex flex-col mt-4">
      <label class="font-WorkSans text-white" for="location"
        >In what U.S. state is your event located?
      </label>
      <select
        class="font-WorkSans text-black rounded-sm h-7"
        id="location"
        name="location"
        required
        disabled
        on:change={handleChange}
        bind:value={$form.location}
      >
        <option />
        <option>Indiana</option>
        <option>Michigan</option>
        <option>Illinois</option>
        <option>California</option>
      </select>
    </div>

    <div class="flex flex-col mt-3">
      <label class="font-WorkSans text-white" for="attendance"
        >How many attendees do you think were present at the event?</label
      >
      <input
        class="font-WorkSans text-black rounded-sm h-7"
        id="attendance"
        name="attendance"
        required
        on:change={handleChange}
        bind:value={$form.attendance}
      />
    </div>
    <!-- {#if $errors.attendance}
      <small class="font-WorkSans text-red-500">{$errors.attendance}</small>
    {/if} -->

    <div class="flex flex-col mt-4">
      <label class="font-WorkSans text-white" for="swag"
        >Did the event provide free 'swag'?
      </label>
      <h3 class="italic font-WorkSans text-white">
        Ex. free shirts, stickers, pens, etc.
      </h3>
      <select
        class="font-WorkSans text-black rounded-sm h-8"
        id="swag"
        name="swag"
        on:change={handleChange}
        bind:value={$form.swag}
      >
        <option />
        <option>Yes</option>
        <option>No</option>
      </select>

      {#if $form.swag === "Yes"}
        <div
          class="bg-cyan-100 border-blue-200 border-2 bg-opacity-20 mt-4 rounded-md p-3 flex flex-col"
        >
          <label class="font-WorkSans text-gray-600 mb-1" for="shirt"
            >Were you given a free shirt upon entry?
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-8"
            id="shirt"
            name="shirt"
            on:change={handleChange}
            bind:value={$form.shirt}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>

          <label class="font-WorkSans text-gray-600 mb-1 mt-2" for="sweater"
            >Were you given a heavier piece of clothing upon entry?
          </label>
          <h3 class="italic font-WorkSans text-gray-600">
            Ex. sweaters, hats, socks, reusable bags, etc.
          </h3>
          <select
            class="font-WorkSans text-black rounded-sm h-8"
            id="sweater"
            name="sweater"
            on:change={handleChange}
            bind:value={$form.sweater}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>

          <label class="font-WorkSans text-gray-600 mb-1 mt-2" for="paper"
            >Were you given a paper brochure, sticker, or other paper item upon
            entry?
          </label>
          <select
            class="font-WorkSans text-black rounded-sm h-8"
            id="paper"
            name="paper"
            on:change={handleChange}
            bind:value={$form.paper}
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      {/if}
    </div>

    <div class="flex flex-col mt-4">
      <label class="font-WorkSans text-white" for="food"
        >Did the event provide meals?
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
            >How many meals were served to you?
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
          <label class="font-WorkSans text-gray-600 mt-3" for="pre_order"
            >Did the event ask for preferences to preorder food ahead of time?
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
            >Did the event offer vegetarian options?
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
        </div>
      {/if}

      <div class="flex flex-col mt-4">
        <label class="font-WorkSans text-white" for="compost"
          >Were there easily accessible compost bins?
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
    </div>
    <div class="flex flex-col items-center mt-4">
      {#if !$isAuthenticated}
        <small class="font-WorkSans text-red-500"
          >Please log in before submisison</small
        >
      {/if}
      <button
        class="mt-2 font-WorkSans bg-none border-white border-2 text-white hover:bg-white hover:text-teal-500 w-40 rounded-sm py-2"
        type="submit"
        disabled={$isAuthenticated}>Submit</button
      >
    </div>
  </form>
</div>
