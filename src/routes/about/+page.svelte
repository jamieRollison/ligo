<script>
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title="About" />
<div class="flex justify-center flex-col items-center md:mx-60">
  <h1 class="text-white font-Jomhuria text-9xl">What is Ligo?</h1>
  <img alt="trash bin" src="/assets/recycle_1.png" class="w-60" />
  <p class="text-white font-WorkSans text-xl">
    Ligo (pronounced Lie-gOH) is a web application built to track your carbon
    footprint for the events you host, or the events you are a part of.
    <br /><br />
    After asking a series of questions, Ligo will calculate your carbon footprint
    and provide you with a score that is accessible by those who attended your event
    alongside messages from atendees, who noted the sustainability efforts you made.
    <br /><br />
  </p>
  <a
    href="/how_it_works"
    class="text-cyan-700 font-WorkSans bg-transparent border-2 border-cyan-700 p-3 rounded hover:bg-cyan-700 hover:text-white mb-10"
  >
    <button> Learn how it works </button></a
  >
</div>
