
<script>
  import Typeahead from "svelte-typeahead";

  const data = [
    { state: "WWDC 2019" },
    { state: "Grace Hopper 2022" },
    { state: "BoilerMake X" },
    { state: "HackIllinois" },
    { state: "Welding Convention of Michigan" },
  ];

  const extract = (/** @type {{ state: any; }} */ item) => item.state;
</script>



<div class = "flex flex-col my-10">
    <!-- TODO: add icon -->
    <Typeahead class="rounded"
        hideLabel
        placeholder={`Search for your event...`}
        {data} 
        {extract} 
    />

    <!-- TODO: fix colors -->
    <button class="font-WorkSans bg-white/50 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4">
        Couldn't find your event? Create a new page for it!
    </button>
</div>

<style>
    :global(mark) {
        background-color: #d5f0f2;
    }

    :global(li.selected, li:hover) {
        background-color: #dbe1e3 !important ;
    }
</style>