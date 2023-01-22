<script>
    import SEO from "$lib/components/SEO.svelte";
    import SearchBarAndButton from "$lib/components/SearchBarAndButton.svelte";
</script>
<div class="mx-10 md:mx-40 flex flex-col items-center">
    <h1 class="font-WorkSans text-white text-3xl mt-10 text-center animate-pulse">
        How it works: Ligo's carbon footprint calculator for your event
    </h1>
    <img src="assets/metal.png" alt="world map" class="w-40" />
    <div class="flex justify-center flex-col w-3/4">
        <h1 class="font-WorkSans text-white text-3xl mt-10 text-center">
            Step 1: Find Your event!
        </h1>
       <p class="text-gray-500 font-WorkSans text-center mt-2">If you're an attendee, search for your event in the search bar. </p>
      
       <SearchBarAndButton />
    
       <h1 class="font-WorkSans text-white text-3xl text-center">
        Step 2: Fill out the information about the event
    </h1>
    <p class="text-gray-500 font-WorkSans text-center mt-2">
        Whether you're an organizer or attendee, you will be asked a 
    series of questions to understand the impact of your event. </p>
    <h1 class="font-WorkSans text-white text-3xl mt-10 text-center">
        Step 3: Obtain your carbon footprint score from Ligo
    </h1>
    <p class="text-gray-500 font-WorkSans text-center mt-2">
        Whether you're an organizer or attendee, you will be asked a 
    series of questions to understand the impact of your event. </p>

</div>
</div>