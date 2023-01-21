
<script>
  import Typeahead from "svelte-typeahead";

  const data = [
    { state: "WWDC 2019" },
    { state: "Grace Hopper 2022" },
    { state: "BoilerMake X" },
    { state: "HackIllinois" },
    { state: "Welding Convention of Michigan" },
  ];

  const extract = (item) => item.state;
</script>

<Typeahead 
    hideLabel
    {data} 
    {extract} 
/>


<main>
    <!-- TODO: fix positioning, colors -->
    <button class="bg-white/50 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Couldn't find your event? Create a new page for it!
    </button>

</main>