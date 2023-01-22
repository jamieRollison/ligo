<script>
  import Typeahead from "svelte-typeahead";
  import { redirect } from "@sveltejs/kit";
  import { goto } from "$app/navigation";

  const data = [
    { event_id: "a1", name: "WWDC 2019" },
    { event_id: "a2", name: "Grace Hopper 2022" },
    { event_id: "a3", name: "BoilerMake X" },
    { event_id: "a4", name: "HackIllinois" },
    { event_id: "a5", name: "Welding Convention of Michigan" },
  ];

  const extract = (/** @type {{ name: any; }} */ item) => item.name;
</script>

<div class="font-WorkSans flex flex-col my-10">
  <!-- TODO: add icon -->
  <Typeahead
    class="rounded"
    hideLabel
    placeholder={`Search for your event...`}
    {data}
    {extract}
    on:select={(e) => {
      let event_id = e?.detail?.original?.event_id;
      console.log(event_id);
      goto(`/${event_id}_info_page`);
    }}
  />

  <!-- TODO: fix colors -->
  <a
    class="font-WorkSans bg-white/50 hover:bg-gray-100 rounded text-gray-800 py-2 px-4 mt-2"
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
