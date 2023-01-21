
  <script>
    import { createForm } from "svelte-forms-lib";

    const { form, errors, handleChange, handleSubmit } = createForm({
      initialValues: {
        name: "",
        state: "",
        email: "",
        food: "",
        clothing_distribution: "",
        utensils: 0,
        shirts: 0,
        stickers: 0,
      },
      validate: values => {
        let errs = {};
        if (values.name === "") {
          errs["name"] = "Name of the event is required!";
        }
        if (values.state === "") {
          errs["state"] = "State is required!";
        }
        return errs;
      },
      onSubmit: values => {
        alert(JSON.stringify(values));
      }
    });
  </script>
<div>
    <h1 class="font-Jomhuria text-6xl text-white flex justify-center">
        Add your event
    </h1>
</div>


  <form on:submit={handleSubmit}>
    <div class="flex flex-col">
        <label class="font-WorkSans text-white" for="name">What is the name of your event?</label>
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
        <label class="font-WorkSans text-white" for="state">In what U.S. state is your event located? </label>
        <select
            class="font-WorkSans text-black rounded-sm h-7"
            id="state"
            name="state"
            on:change={handleChange}
            bind:value={$form.state}>
            <option></option>
            <option>Indiana</option>
            <option>Michigan</option>
            <option>Illinois</option>
            <option>California</option>
        </select>
    </div>
    {#if $errors.state}
        <small class="font-WorkSans text-red-500">{$errors.state}</small>
    {/if}
    <div class="flex flex-col mt-4">
        <label class="font-WorkSans text-white" for="state">Did your event provide food? </label>
        <select
            class="font-WorkSans text-black rounded-sm h-8"
            id="food"
            name="food"
            on:change={handleChange}
            bind:value={$form.food}>
            <option></option>
            <option>Yes</option>
            <option>No</option>
        </select>
        {#if $form.food === "Yes"}
            <small class="font-WorkSans text-red-500">{$errors.utensils}</small>
        {/if}
    </div>
    <div class="flex flex-col items-center mt-4">
        <button class="font-WorkSans bg-none border-white border-2 text-white hover:bg-white hover:text-teal-500 w-40 rounded-sm py-2"type="submit">Submit</button>
    </div>
    
  </form>
