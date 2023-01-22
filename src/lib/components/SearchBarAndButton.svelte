<script>
  import Typeahead from "svelte-typeahead";
  /**
   * @type { {name: string;}[] }
   */
  export let events;

  const extract = (/** @type {{ name: any; }} */ item) => {
    console.log(item.name);
    return item.name;
  };
</script>

<div class="font-WorkSans flex flex-col my-10">
  <!-- TODO: add icon -->
  <Typeahead
    class="rounded"
    hideLabel
    placeholder={`Search for your event...`}
    data={events}
    {extract}
  />

  <!-- TODO: fix colors -->
  <a
    class="flex justify-center font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
    href="/add_event"
  >
    Couldn't find your event? Create a new page for it!
  </a>
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
