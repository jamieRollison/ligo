
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



<div class = "font-WorkSans flex flex-col my-10">
    <!-- TODO: add icon -->
    <Typeahead class="rounded"
        hideLabel
        placeholder={`Search for your event...`}
        {data} 
        {extract} 
    />

    <!-- TODO: fix colors -->
    <button class="font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2">
        Couldn't find your event? Create a new page for it!
    </button>
</div>

<style>
    :global(mark) {
        background-color: #d5f0f2;
    }

    :global(li.selected) {
        background-color: #dbe1e3 !important ;
    }

    :global(li:hover[data-svelte-typeahead]) {
        background-color: #dbe1e3;
    }

    :global(.svelte-1t4elht) {
        border-radius: 8px;
    }

    :global(.svelte-1t4elht input) {
        border-radius: 10px;
    }


    :global(.svelte-5m0wg6 hide-label) {
        border-radius: 0px;
    }
</style>