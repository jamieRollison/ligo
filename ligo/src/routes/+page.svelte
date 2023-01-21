<script>
	import SEO from '$lib/components/SEO.svelte';
	import SearchBarAndButton from '$lib/components/SearchBarAndButton.svelte';
</script>

<SEO />
<div class="flex flex-col items-center md:flex-row ">
	<img class="md:w-1/2" src="/assets/recycle_2.png" alt="recycle_2 throwing out trash" />
	<div class="flex flex-col">
		<h1 class="font-Jomhuria text-9xl text-white">Ligo</h1>
		<p class="font-WorkSans text-white text-2xl">
			Your new tool to calculate the environmental impact of your coordinated event, and helping the
			environemt through analyzing your carbon footprint.
		</p>
		<SearchBarAndButton />
	</div>
</div>
